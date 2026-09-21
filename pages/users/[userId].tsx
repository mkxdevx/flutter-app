import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import TweetSkeleton from "@/components/TweetSkeleton";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const userView = () => {
  const router = useRouter();
  const { userId } = router.query

  const { data: fetchedUser, isLoading: isUserLoading } = useUser(userId as string);
  const { data: userPosts, isLoading: isPostsLoading } = usePosts(userId as string);
  const { data: currentUser } = useCurrentUser();


  return (
    <div className="min-h-screen border-x border-neutral-800 bg-black text-white">
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero
        isLoading={isUserLoading}
        fetchedUser={fetchedUser}
      />
      <UserBio
        isLoading={isUserLoading}
        fetchedUser={fetchedUser}
        currentUser={currentUser}
      />
      {isPostsLoading ? (
        <div className="divide-y divide-neutral-800">
          <TweetSkeleton />
          <TweetSkeleton />
        </div>
      ) : (
        <PostFeed
          userId={userId as string}
          isLoading={isPostsLoading}
          posts={userPosts}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default userView;