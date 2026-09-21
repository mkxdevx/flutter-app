import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  userId?: string;
  isLarge?: boolean;
  hasBorder?: boolean;
  isComment?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder, isComment }) => {
  const { data: fetchedUser, isLoading } = useUser(userId);
  const router = useRouter();
  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId],
  );

  if(isLoading) {
    return (
      <div
        className={`bg-neutral-800 animate-pulse rounded-full border-4 border-black transition ${isLarge ? "h-32 w-32" : isComment ? "h-10 w-10" : "h-12 w-12"} `}
      />
    );
  }

  return (
    <div
      className={`
        ${hasBorder && "border-4 border-black"} 
        ${isLarge ? "h-32 w-32" : isComment ? "h-10 w-10" : "h-12 w-12"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer 
        relative
        `}
    >
      <Image sizes="20" fill style={{
        objectFit: 'cover',
        borderRadius: '100%'
      }} alt="Avatar" onClick={onClick} src={fetchedUser?.profileImage || '/images/placeholder.png'} />
    </div>
  );
};

export default Avatar;
