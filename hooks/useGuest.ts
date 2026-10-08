import { useCallback, useState } from "react";
import useLoginModal from "./useLoginModal";
import useRegisterModal from "./useRegister";
import toast from "react-hot-toast";

const useGuest = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [ isLoading, setIsLoading ] = useState(false);
  const loginGuest = useCallback(async () => {
    try {
      setIsLoading(true);
      const GuestUser = await prisma?.user.findUnique({
        where: {
          email: "guest@example.com",
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);
}