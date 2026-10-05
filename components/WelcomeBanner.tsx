import useLoginModal from "@/hooks/useLoginModal";
import Button from "./Button";
import useRegisterModal from "@/hooks/useRegister";
import { BiRightArrowCircle } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";

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
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-full py-2.5 px-4 cursor-pointer hover:bg-neutral-800/80 transition duration-200"
            onClick={loginModal.onOpen}
          >
            <p className="text-sky-500 text-sm font-medium text-center">
              Login to reply
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-4">
      <h1 className="text-white text-2xl font-bold mb-4">Welcome to Flutter</h1>
      <div className="flex flex-row gap-4 justify-center">
        <Button label="Login" onClick={loginModal.onOpen} />
        <Button label="Register" secondary onClick={registerModal.onOpen} />
      </div>
      <hr className="my-4" />
      <div className="mt-4 flex flex-row align-center justify-center">
        <p className="font-semi-bold size-md">Continue as Guest...</p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
