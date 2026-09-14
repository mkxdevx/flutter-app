import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId as string);
  console.log("POST DATA IN POST FEED:", posts);

  return (
    <>
      {posts &&
        posts.map((post: Record<string, any>) => {
          return <PostItem userId={userId} key={post.id} data={post} />;
        })}
    </>
  );
};

export default PostFeed;
