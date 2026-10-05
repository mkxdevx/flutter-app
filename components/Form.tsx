import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegister";
import axios from "axios";
import { useCallback, useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import Avatar from "./Avatar";
import usePost from "@/hooks/usePost";
import { ClipLoader } from "react-spinners";
import WelcomeBanner from "./WelcomeBanner";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
  currentUser: Record<string, any>;
  autoFocus?: boolean;
}

const Form: React.FC<FormProps> = ({
  placeholder,
  isComment,
  postId,
  currentUser,
  autoFocus,
}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { mutate: mutatePosts } = usePosts(postId as string);
  const { mutate: mutatePost } = usePost(postId as string);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus) {
      textAreaRef.current?.focus();
    }
  }, [autoFocus]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";
      await axios.post(url, { body });
      toast.success(isComment ? "Reply Created" : "Tweet Created");

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

  if (!currentUser) {
    return <WelcomeBanner isComment={isComment} />;
  }

  return (
    <div
      className={`mt-3
        ${
          isComment
            ? "pl-15 pr-20 border-y border-neutral-700 w-full bg-black"
            : "pl-4 pr-4"
        }
      `}
    >
      <div
        className={`flex flex-row items-start gap-3 w-full relative ${isComment ? "border border-neutral-800 rounded-full m-3 py-1 px-2 focus-within:border-sky-500 transition-colors duration-200 " : "mt-5"}`}
      >
        <Avatar user={currentUser} isComment={isComment} />
        <div
          className={`flex-1 flex pt-1 ${isComment ? "flex-row" : "flex-col"}`}
        >
          <textarea
            ref={textAreaRef}
            disabled={isLoading}
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className={`w-full text-white resize-none outline-none ring-0 placeholder-neutral-500 ${isComment ? "text-[15px] pt-2" : "text-[20px]"}`}
            placeholder={placeholder}
            rows={isComment ? 1 : 3}
          />
          <div
            className={`${isComment ? "mb-1" : "mt-4 mb-3 flex justify-end"}`}
          >
            <Button
              label={
                isLoading ? (
                  <ClipLoader size={18} />
                ) : isComment ? (
                  "Reply"
                ) : (
                  "Tweet"
                )
              }
              onClick={onSubmit}
              disabled={isLoading || !body}
              isComment={isComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
