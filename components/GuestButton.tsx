import useGuest from "@/hooks/useGuest";

const GuestButton = () => {
  const { loginGuest } = useGuest();

  return (
    <div className="text-center">
      <button className="mt-3 lg:mt-5 text-sm text-neutral-400 font-semibold hover:text-neutral-200 active:text-sky-500 transition">
        Continue as Guest
      </button>
    </div>
  );
};

export default GuestButton;
