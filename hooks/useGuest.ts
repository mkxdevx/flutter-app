import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import useCurrentUser from "./useCurrentUser";
import { signIn } from "next-auth/react";
import useLoginModal from "./useLoginModal";
import useRegisterModal from "./useRegister";

const useGuest = () => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const loginGuest = useCallback(async () => {
    if (currentUser) {
      return;
    }

    try {
      setIsLoading(true);

      const result = await signIn("credentials", {
        email: "guest@example.com",
        password: process.env.NEXT_PUBLIC_GUEST_PASSWORD,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Unable to log in as guest");
      }
      if (loginModal.isOpen) {
        return loginModal.onClose;
      }
      if (registerModal.isOpen) {
        return registerModal.onClose;
      }

      toast.success("Successfully joined as guest");
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [currentUser, loginModal, registerModal, isLoading]);

  return {
    loginGuest,
    isLoading,
  };
};

export default useGuest;
