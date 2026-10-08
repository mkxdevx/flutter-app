import useLoginModal from "@/hooks/useLoginModal";
import Button from "./Button";
import useRegisterModal from "@/hooks/useRegister";
import { FaCircle } from "react-icons/fa";
import GuestButton from "./GuestButton";
import { BsTwitter } from "react-icons/bs";

interface WelcomeBannerProps {
  isComment?: boolean;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ isComment }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  if (isComment) {
    return (
      <div className="flex align-center justify-center border-y border-neutral-700 w-full bg-black">
        <div className="w-full max-w-80 py-2">
          <button className="w-full rounded-full text-sm font-medium text-center text-sky-500 bg-neutral-900 border-neutral-800 py-2.5 px-4 hover:bg-neutral-800/80 transition">
            Login to reply
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-4 p-8">
        <div className="flex-1 flex flex-col gap-2 items-center">
          <h1 className="text-white text-xl lg:text-2xl font-bold">
            Welcome to <span className="text-sky-500">Flutter</span>
          </h1>
          <BsTwitter size={26} />
        </div>
        <div className="h-20 w-0.5 bg-neutral-800 lg:h-24" />
        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 text-sm items-center justify-center lg:text-md">
            <Button label="Login" onClick={loginModal.onOpen} />
            <FaCircle size={6} />
            <Button label="Register" onClick={registerModal.onOpen} />
          </div>
          <GuestButton />
        </div>
      </div>
    </>
  );
};

export default WelcomeBanner;
