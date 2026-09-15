import Form from "@/components/Form";
import Header from "@/components/Header";
import CommentFeed from "@/components/posts/CommentFeed";
import PostItem from "@/components/posts/PostItem";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";


const postView = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: fetchedPost, isLoading } = usePost(postId as string);
  console.log("POST DATA FROM QUERY:", fetchedPost)

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightBlue" size={80} />
      </div>
    )
  }
  return (
    <>
    <Header label="Tweet" showBackArrow />
    <PostItem data={fetchedPost} userId={fetchedPost.id}>
    <Form postId={postId as string} isComment={true} placeholder="Reply" />
    </PostItem>
    <CommentFeed comments={fetchedPost?.comments} />
    </>
  )
}

export default postView;