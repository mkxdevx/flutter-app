import Header from "@/components/Header";
import NotificationFeed from "@/components/NotificationFeed";
import { GetServerSidePropsContext} from "next";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

const notifications = () => {
  return (
    <>
      <Header label="Notifications" showBackArrow />
      <NotificationFeed />
    </>
  );
};

export default notifications;
