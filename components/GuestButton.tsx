import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegister";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

const GuestButton = () => {
  const loginModal = useLoginModal();
  const RegisterModal = useRegisterModal();
  const [ isLoading, setIsLoading ] = useState(false);


  const loginGuest = useCallback(async() => {
    try {
      setIsLoading(true);
      const GuestUser = await prisma?.user.findUnique({
        where: {
          email: "guest@example.com",
        }
      })

    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [])

  return (
    <div className="text-center">
      <button className="mt-3 lg:mt-5 text-sm text-neutral-500 font-semibold hover:text-neutral-200 active:text-sky-500 transition" onClick={loginGuest}>
        Continue as Guest
      </button>
    </div>
  );
}

export default GuestButton