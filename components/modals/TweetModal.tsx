import useCurrentUser from "@/hooks/useCurrentUser";
import useTweetModal from "@/hooks/useTweetModal";
import Modal from "../Modal";
import Form from "../Form";

const TweetModal = () => {
  const tweetModal = useTweetModal();
  const { data: currentUser, isLoading: isUserLoading } = useCurrentUser();


  return (
    <Modal
    isOpen={tweetModal.isOpen}
    onClose={tweetModal.onClose}
    title="Create a Tweet"
    body={
      <Form
      placeholder="What's happening?"
      currentUser={currentUser}
       />
    }
     />
  )
};

export default TweetModal;
