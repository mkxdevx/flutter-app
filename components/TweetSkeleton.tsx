import Avatar from "./Avatar";

interface TweetSkeletonProps {
  isComment?: boolean;
  isLastReply?: boolean;
}

const TweetSkeleton = ({
  isComment = false,
  isLastReply = false,
}: TweetSkeletonProps) => {
  return (
    <div
      className={`relative flex gap-4 px-5 animate-pulse ${isComment ? "py-4 bg-black" : "py-5 border-b border-neutral-800"}`}
    >
      <div className="flex flex-col items-center relative">
        <Avatar isComment={isComment} />
      </div>
      <div className="flex-1 space-y-3 pb-1">
      <div className="flex items-center gap-2 pt-0.5">
        <div className="h-4 bg-neutral-800 rounded w-28" />
        <div className="h-3 bg-neutral-800 rounded w-12" />
      </div>
      <div className="space-y-2">
        {!isComment && <div className="h-4 bg-neutral-800 rounded w-full" />}
        <div className={`h-4 bg-neutral-800 rounded ${isComment ? "w-2/3" : "w-4/5"}`} />
      </div>
      {!isComment && (
        <div className="flex items-center gap-10 mt-3 pt-1">
          <div className=" h-5 w-5 bg-neutral-800 rounded-full" />
          <div className="h-5 w-5 bg-neutral-800 rounded-full" />
        </div>
      )}
      </div>
    </div>
  );
};

export default TweetSkeleton;
