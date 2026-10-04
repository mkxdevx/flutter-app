const UserBioSkeleton = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        <div className="bg-neutral-800 animate-pulse rounded-full h-10 w-24" />
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col gap-2">
          <div className="bg-neutral-800 animate-pulse rounded h-7 w-40" />
          <div className="bg-neutral-800 animate-pulse rounded h-4 w-28" />
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <div className="bg-neutral-800 animate-pulse rounded h-5 w-full" />
          <div className="bg-neutral-800 animate-pulse rounded h-5 w-32" />
        </div>
      
      <div className="flex flex-row items-center mt-4 gap-6">
        <div className="bg-neutral-800 animate-pulse rounded h-5 w-20" />
        <div className="bg-neutral-800 animate-pulse rounded h-5 w-20" />
      </div>
      </div>
    </div>
  );
};

export default UserBioSkeleton;
