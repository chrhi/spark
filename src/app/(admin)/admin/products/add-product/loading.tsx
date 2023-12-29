import { Skeleton } from "@/components/ui/skeleton";
import type { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="hidden max-w-[1000px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <Skeleton className="h-7  w-32" />
        </div>
        <div className="w-full space-x-4  grid  grid-cols-3">
          <div className="w-full col-span-2 h-fit flex flex-col items-center">
            <Skeleton className="h-[300px] w-full my-4 " />
            <Skeleton className="h-[300px] w-full my-4 " />
          </div>

          <div className="w-full h-fit flex flex-col items-center">
            <Skeleton className="h-32 w-full my-4 " />
            <Skeleton className="h-32 w-full my-4 " />
            <Skeleton className="h-32 w-full my-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
