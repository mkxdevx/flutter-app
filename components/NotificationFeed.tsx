import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { BsTwitter } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

const NotificationFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [], isLoading } = useNotifications(
    currentUser?.id,
  );
  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (isLoading) {
    return (
      <div className="mt-20 flex align-center justify-center">
        <ClipLoader size={84} color="white" />
      </div>
    );
  } else if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-500 text-center p-6 text-xl">
        No notifications
      </div>
    );
  }

  //  const createdAt = useMemo(() => {
  //     if (!fetchedNotifications?.createdAt) {
  //       return null;
  //     }
  //       return formatDistanceToNowStrict(new Date(fetchedNotifications.createdAt));
  //   }, [fetchedNotifications?.createdAt]);

  return (
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => {
        return (
          <div
            key={notification.id}
            className="flex flex-row items-center p-6 gap-4  border-neutral-800"
          >
            <BsTwitter color="white" size={32} />
            <p className="text-white">{notification.body}</p>
            {/* <p>{createdAt}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default NotificationFeed;
