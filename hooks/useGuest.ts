import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import useCurrentUser from "./useCurrentUser";
import { signIn } from "next-auth/react";

const useGuest = () => {
  const { data: currentUser, mutate } = useCurrentUser();

  const loginGuest = useCallback(async () => {
    if (currentUser) {
      return;
    }

    try {
      const result = await signIn("credentials", {
        guest: "true",
        redirect: false,
      });

      if (result?.error) {
        toast.error("Unable to log in as guest");
        return;
      }
      
      toast.success("Joined as guest");
      mutate(result);
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    }
  }, [currentUser]);

  return {
    loginGuest,
  };
};

export default useGuest;
