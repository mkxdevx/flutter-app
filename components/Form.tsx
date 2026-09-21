import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegister";
import axios from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import Avatar from "./Avatar";
import usePost from "@/hooks/usePost";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts(postId as string);
  const { mutate: mutatePost } = usePost(postId as string);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";
      await axios.post(url, { body });
      toast.success("Tweet Created");

      setBody("");
      mutatePosts();
      mutatePost();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, mutatePost, isComment, postId]);

  let formContent;

  if(currentUser) {
    formContent = (
      <div className="flex flex-row gap-3 w-full relative">
        <Avatar userId={currentUser.id} isComment={isComment} />
        <div className="flex-1 flex flex-col pt-1">
            <textarea
              disabled={isLoading}
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className={`w-full text-white resize-none outline-none ring-0 placeholder-neutral-500 ${isComment ? "text-[15px] pt-1" : "text-[20px] mt-3"}`}
              placeholder={placeholder}
              rows={isComment ? 1 : 3}
            />
            <div
              className={`${isComment ? "mt-2 md:mt-0 flex justify-end" : "mt-4 mb-3 flex justify-end"}`}
            >
              <Button
                label={isComment ? "Reply" : "Tweet"}
                onClick={onSubmit}
                disabled={isLoading || !body}
              />
            </div>
        </div>
      </div>
    );
  } else if (isComment) {
    formContent = (
      <div className="w-full pl-14 pr-5 py-2">
        <div
          className="bg-neutral-900 border border-neutral-800 rounded-full py-2.5 px-4 cursor-pointer hover:bg-neutral-800/80 transition duration-200"
          onClick={loginModal.onOpen}
        >
          <p className="text-sky-500 text-sm font-medium">Login to reply</p>
        </div>
      </div>
    );
  } else {
    formContent = (
      <div className="text-center py-8">
        <h1 className="text-white text-2xl font-bold mb-4">Welcome to Flutter</h1>
        <div className="flex flex-row gap-4 justify-center">
          <Button label="Login" onClick={loginModal.onOpen} />
          <Button label="Register" secondary onClick={registerModal.onOpen} />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`ml-4 mr-4 ${isComment ? "border-b border-neutral-900 bg-black" : "border-b border-neutral-800"}`}>
        {formContent}
    </div>
  );
};

export default Form;
