import { Skeleton } from "../components/ui/skeleton";

const SkeletonCard = () => {
  return (
    // <div className="flex items-center space-x-4">
    //   <Skeleton className="h-12 w-12 rounded-full" />
    //   <div className="space-y-2">
    //     <Skeleton className="h-4 w-[250px]" />
    //     <Skeleton className="h-4 w-[200px]" />
    //   </div>
    // </div>
    <div className="max-w-xl w-full ">
      <Skeleton className="size-60" />
      <div className="py-3 flex flex-col gap-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
