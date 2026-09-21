import Image from "next/image";
import useUser from "@/hooks/useUser";
import Avatar from "../Avatar";

interface UserHeroProps {
  fetchedUser: Record<string, any>
  isLoading: boolean;
}

const UserHero: React.FC<UserHeroProps> = ({ fetchedUser, isLoading }) => {

  if(isLoading || !fetchedUser) {
    return (
      <div className="bg-neutral-800 h-44 w-full animate-pulse relative" />
    )
  }

  return (
    <div className="bg-neutral-700 h-44 relative">
      {fetchedUser?.coverImage && (
        <Image
          src={fetchedUser.coverImage}
          fill
          alt="Cover Image"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute -bottom-16 left-4">
      <Avatar user={fetchedUser.id} isLarge hasBorder isLoading={isLoading} />
      </div>
    </div>
  );
};

export default UserHero;
