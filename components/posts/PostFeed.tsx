import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";
import { AiOutlineMessage } from "react-icons/ai";

interface PostFeedProps {
  userId?: string;
  posts: Record<string, any>[];
  isLoading: boolean;
  currentUser: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId, posts = [], currentUser, isLoading}) => {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="p-3 bg-neutral-900 rounded-full text-neutral-600 mb-3">
          <AiOutlineMessage size={26} />
        </div>
        <p className="text-neutral-200 font-semibold text-[17px]">
          No posts yet
        </p>
        <p className="text-neutral-500 text-sm mt-1 max-w-xs">
          When this user shares something, their posts will appear here.
        </p>
      </div>
    );
  }

  return (
    <>
      {posts &&
        posts.map((post: Record<string, any>) => {
          return (
            <PostItem
              userId={userId}
              key={post.id}
              data={post}
              currentUser={currentUser}
              isLoading={isLoading}
            />
          );
        })}
    </>
  );
};

export default PostFeed;
