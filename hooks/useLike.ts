import { useCallback, useMemo } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";
import toast from "react-hot-toast";
import axios from "axios";
import { useSWRConfig } from "swr";

const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { data: fetchedPosts, mutate: mutateFetchedPosts } = usePosts();
  const loginModal = useLoginModal();
  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    return list.includes(currentUser?.id);
  }, [fetchedPost?.likedIds, currentUser?.id]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      toast.error("Please sign in first");
      return loginModal.onOpen();
    }

    try {
      const updateSinglePostLikeIds = (currentPost: any) => {
        if (!currentPost) {
          return currentPost;
        }

        return {
          ...currentPost,
          likedIds: hasLiked
            ? (currentPost.likedIds || []).filter(
                (id: string) => id !== currentUser.id,
              )
            : [...(currentPost.likedIds || []), currentUser.id],
        };
      };
      mutateFetchedPost(updateSinglePostLikeIds, false);

      const updatePostsLikeIds = (currentPosts: any[]) => {
        if (!currentPosts) return currentPosts;

        return currentPosts.map((post) => {
          if (post.id !== postId) {
            return post;
          }

          return {
            ...post,
            likedIds: hasLiked
              ? (post.likedIds || []).filter(
                  (id: string) => id !== currentUser.id,
                )
              : [...(post.likedIds || []), currentUser.id],
          };
        });
      };
      mutateFetchedPosts(updatePostsLikeIds, false);

      let request;
      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: { postId } });
      } else {
        request = () => axios.post("/api/like", { postId });
      }

      await request();

      mutateFetchedPost();
      mutateFetchedPosts();

      toast.success(hasLiked ? "Removed like" : "Successfully liked");
    } catch (error) {
      mutateFetchedPost();
      toast.error("Something went wrong");
    }
  }, [
    currentUser,
    hasLiked,
    postId,
    mutateFetchedPost,
    mutateFetchedPosts,
    loginModal,
  ]);

  return { hasLiked, toggleLike };
};

export default useLike;
