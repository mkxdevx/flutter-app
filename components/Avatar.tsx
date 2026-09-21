import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  user?: Record<string, any>;
  isLarge?: boolean;
  hasBorder?: boolean;
  isComment?: boolean
  isLoading?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ user, isLarge, hasBorder, isComment, isLoading }) => {
  const router = useRouter();

  if(isLoading || !user) {
    return (
      <div
        className={`bg-neutral-800 animate-pulse rounded-full border-4 border-black transition ${isLarge ? "h-32 w-32" : isComment ? "h-10 w-10" : "h-12 w-12"} `}
      />
    );
  }

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${user.id}`;
      router.push(url);
    },
    [router, user.id],
  );

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
      }} alt="Avatar" onClick={onClick} src={user.profileImage || '/images/placeholder.png'} />
    </div>
  );
};

export default Avatar;
