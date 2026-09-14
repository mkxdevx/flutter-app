import { useCallback, useMemo, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";
import toast from "react-hot-toast";
import axios from "axios";

const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);
  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const loginModal = useLoginModal();
  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId);
  }, [userId, currentUser?.followingIds]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      setIsFollowLoading(true);

      mutateCurrentUser((currentData: any) => {
        if (!currentData) {
          return currentData;
        }

        const currentFollowersCount = currentData.followersCount || 0;

        return {
          ...currentData,
          followersCount: isFollowing
            ? currentFollowersCount - 1
            : currentFollowersCount + 1,
        };
      }, false);

      mutateFetchedUser((currentData: any) => {
        if (!currentData) {
          return currentData;
        }

        const currentFollowingCount = currentData.followingIds || 0;

        return {
          ...currentData,
          followingIds: isFollowing ? (currentData.followingIds || []).filter((id: string) => id !== userId) :
          [...(currentData.followingIds || []), userId]
        }
      }, false);

      let request;
      if (isFollowing) {
        request = () => axios.delete("/api/follow", { data: { userId } });
      } else {
        request = () => axios.post("/api/follow", { userId });
      }
      await request();

      mutateCurrentUser();
      mutateFetchedUser();

      toast.success(isFollowing ? "Unfollowed" : "Successfully followed");
    } catch (error) {
      mutateCurrentUser();
      mutateFetchedUser();
      toast.error("something went wrong");
    } finally {
      setIsFollowLoading(false);
    }
  }, [
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchedUser,
    loginModal,
  ]);

  return {
    isFollowing,
    toggleFollow,
    isFollowLoading,
  };
};

export default useFollow;
