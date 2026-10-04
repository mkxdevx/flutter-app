import Image from "next/image";
import useUser from "@/hooks/useUser";
import Avatar from "../Avatar";

interface UserHeroProps {
  fetchedUser: Record<string, any>
  isLoading: boolean;
}

const UserHero: React.FC<UserHeroProps> = ({ fetchedUser, isLoading }) => {

  return (
    <div
      className={`h-44 relative ${isLoading ? "bg-neutral-800 animate-pulse" : ""}`}
    >
      {fetchedUser?.coverImage && (
        <Image
          src={fetchedUser.coverImage}
          fill
          alt="Cover Image"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className={`absolute -bottom-16 left-4 ${isLoading? "bg-neutral-800 rounded-full" : ""}`}>
        <Avatar user={fetchedUser} isLarge hasBorder isLoading={isLoading} />
      </div>
    </div>
  );
};

export default UserHero;
