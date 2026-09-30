import { FaFeather } from "react-icons/fa";
import useLoginModal from "@/hooks/useLoginModal";
import useTweetModal from "@/hooks/useTweetModal";
import { useCallback } from "react";

const SidebarTweetButton = ({ currentUser }: Record<string, any>) => {
  const loginModal = useLoginModal();
  const tweetModal = useTweetModal();

  const handleClick = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen();
      return;
    }
    tweetModal.onOpen();
  }, [tweetModal, loginModal]);

  return (
    <div onClick={handleClick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
