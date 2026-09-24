import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import TweetSkeleton from "@/components/TweetSkeleton";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";

export default function Home() {
  const { data: posts = [], isLoading: isPostsLoading } = usePosts();
  const { data: currentUser, isLoading: isUserLoading } = useCurrentUser();

  return (
    <div className="min-h-screen border-x border-neutral-800 bg-black text-white">
      <Header label="Home" />
          <Form
            placeholder="What's Happening?"
            currentUser={currentUser?.id}
            isUserLoading={isUserLoading}
          />
          {isPostsLoading ? (
          <div className="divide-y divide-neutral-800">
            {Array.from({ length: 5 }).map((_, i) => (
              <TweetSkeleton key={i} />
            ))}
          </div>
          ) : (
          <PostFeed
            posts={posts}
            isLoading={isPostsLoading}
            currentUser={currentUser?.id}
          />
          )}
    </div>
  );
}
