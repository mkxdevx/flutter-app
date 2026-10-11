import useGuest from "@/hooks/useGuest";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegister";
import { useCallback, useState } from "react";

const GuestButton = () => {
  const { loginGuest } = useGuest();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const GuestLogin = useCallback(() => {
    setIsLoading(true);
    loginGuest();
    if (loginModal.isOpen === true) {
      return loginModal.onClose();
    }
    if (registerModal.isOpen === true) {
      return registerModal.onClose();
    }
    setIsLoading(false);
  }, [isLoading, loginGuest, loginModal, registerModal]);

  return (
    <button
      className="mt-3 lg:mt-5 cursor-pointer hover:text-neutral-200 active:text-sky-500 transition"
      onClick={GuestLogin}
    >
      Continue as Guest
    </button>
  );
};

export default GuestButton;
