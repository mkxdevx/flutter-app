import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import TweetSkeleton from "../TweetSkeleton";

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [], isLoading } = usePosts(userId as string);

  if(isLoading) {
    return (
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <TweetSkeleton key={index} />
        ))}
      </div>
    )
  }

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
