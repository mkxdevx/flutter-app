import { useCallback, useMemo } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";
import toast from "react-hot-toast";
import axios from "axios";

const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);
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
        };

        return {
          ...currentPost,
          likedIds: hasLiked
          ? (currentPost.likedIds || []).filter(
              (id: string) => id !== currentUser.id,
            )
          : [...(currentPost.likedIds || []), currentUser.id]
        };
      };

      const updateFeedListLikeIds = (currentFeed: any[]) => {
        if(!currentFeed) {
          return currentFeed;
        };

        return currentFeed.map((post: any) => {
          if(post.id !== postId) return post;

          return {
            ...post, likedIds: hasLiked ? (post.likedIds ||[]).filter((id: string) => id !== currentUser.id) : [...(post.likedIds || []), currentUser.id]
          };
      });
      };

      mutateFetchedPost(updateSinglePostLikeIds, false);
      mutateFetchedPosts(updateFeedListLikeIds, false);

      let request;
      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: { postId } });
      } else {
        request = () => axios.post("/api/like", { postId });
      }

      await request();

      mutateFetchedPosts();
      mutateFetchedPost();

      toast.success(hasLiked ? "Removed like" : "Successfully liked");
    } catch (error) {
      mutateFetchedPosts();
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
