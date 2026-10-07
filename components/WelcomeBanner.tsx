import useLoginModal from "@/hooks/useLoginModal";
import Button from "./Button";
import useRegisterModal from "@/hooks/useRegister";

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
    <>
      <div className="flex items-center justify-between gap-4 px-4 py-4">
        <div className="flex-1">
          <h1 className="text-white text-lg font-bold">Welcome to Flutter</h1>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="my-3">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" secondary onClick={registerModal.onOpen} />
          </div>
          <button className="outline rounded-full py-1">Continue as Guest</button>
        </div>
      </div>
    </>
  );
};

export default WelcomeBanner;
