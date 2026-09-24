import { AiOutlineMessage } from "react-icons/ai";
import TweetSkeleton from "../TweetSkeleton";
import CommentItem from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  if (comments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="p-3 bg-neutral-900 rounded-full text-neutral-600 mb-3">
          <AiOutlineMessage size={26} />
        </div>
        <p className="text-neutral-200 font-semibold text-[17px]">
          No comments yet
        </p>
        <p className="text-neutral-500 text-sm mt-1 max-w-xs">
          Be the first to share your thoughts!
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-neutral-800">
      {comments.map((comment) => {
        return <CommentItem key={comment.id} data={comment} />;
      })}
    </div>
  );
};

export default CommentFeed;
