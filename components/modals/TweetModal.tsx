import useCurrentUser from "@/hooks/useCurrentUser";
import useTweetModal from "@/hooks/useTweetModal";
import Modal from "../Modal";
import Form from "../Form";

const TweetModal = () => {
  const tweetModal = useTweetModal();
  const { data: currentUser, isLoading } = useCurrentUser();
  const bodyContent = (
    <div
      className='rounded-xl p-4 focus-within:border-sky-500 transition-colors duration-200 border -mt-6'
    >
      <Form
        placeholder="What's happening"
        currentUser={currentUser}
        autoFocus={tweetModal.isOpen}
      />
    </div>
  );

  return (
    <Modal
    disabled={isLoading}
    isOpen={tweetModal.isOpen}
    onClose={tweetModal.onClose}
    title="Create a Tweet"
    size="small"
    body={bodyContent}
     />
  )
};

export default TweetModal;
