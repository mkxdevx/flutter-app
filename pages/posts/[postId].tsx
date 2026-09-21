import Form from "@/components/Form";
import Header from "@/components/Header";
import CommentFeed from "@/components/posts/CommentFeed";
import PostItem from "@/components/posts/PostItem";
import TweetSkeleton from "@/components/TweetSkeleton";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";


const postView = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: fetchedPost, isLoading } = usePost(postId as string);

  return (
    <div className="min-h-screen border-x border-neutral-800 bg-black text-white">
    <Header label="Tweet" showBackArrow />
    {isLoading || !fetchedPost ? (
      <>
      <TweetSkeleton />
      <div className="px-5 py-3 border-b border-neutral-800 pl-14">
        <div className="h-9 bg-neutral-900 rounded-full w-full animate-pulse" />
      </div>
      <div className="divide-y divide-neutral-900/30">
        <TweetSkeleton isComment />
        <TweetSkeleton isComment />
        <TweetSkeleton isComment isLastReply />
      </div>
      </>
      ) : (
        <>
        <PostItem data={fetchedPost} userId={fetchedPost.id} >
    <Form postId={postId as string} isComment placeholder="Share your thoughts" />
    </PostItem>
    <CommentFeed comments={fetchedPost?.comments} />
    </>
      )}
    
    </div>
  )
}

export default postView;