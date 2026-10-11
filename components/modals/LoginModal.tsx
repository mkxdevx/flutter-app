import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegister";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import GuestButton from "../GuestButton";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onToggle = useCallback(() => {
    if (isLoading) return;
    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await signIn("credentials", {
        email,
        password,
      });
      toast.success("Logged in");
      loginModal.onClose();
    } catch (error) {
      console.error(error);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [loginModal, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <form onChange={(e) => e.preventDefault()}>
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />
      </form>
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <div>
        First time using Flutter?
        <div className="mt-3">
          <p
            className="text-white cursor-pointer hover:text-neutral-200 active:text-sky-500 transition"
            onClick={onToggle}
          >
            {" "}
            Create an account
          </p>
          <p className="text-white hover:underline ">
            <GuestButton />
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel={isLoading ? <ClipLoader /> : "Sign in"}
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;
