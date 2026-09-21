import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";
import TweetSkeleton from "../TweetSkeleton";

interface PostFeedProps {
  userId?: string;
  posts: Record<string, any>[];
  isLoading: boolean;
  currentUser: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId, posts = [], currentUser}) => {

  return (
    <>
      {posts &&
        posts.map((post: Record<string, any>) => {
          return <PostItem userId={userId} key={post.id} data={post} currentUser={currentUser} />;
        })}
    </>
  );
};

export default PostFeed;
