import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import type { FC } from "react";

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper className="max-w-screen-2xl">
      <div className="w-full min-h-[500px] h-fit grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 py-2 md:py-6 lg:py-8 ">
        <div className=" flex flex-col w-full h-full  col-span-3 md:col-span-1 lg:col-span-2 ">
          <Skeleton className="w-[50%] h-2 rounded-full mt-4" />
          <Skeleton className="w-full h-full min-h-[350px] rounded-lg my-4" />
        </div>
        <div className="flex  flex-col gap-y-4 col-span-3 md:col-span-1 items-start p-4 w-full h-full">
          <Skeleton className="w-full h-6 rounded-full " />
          <Skeleton className="w-[30%] h-6 rounded-full " />
          <div className="w-full flex flex-col items-center my-2">
            <Skeleton className="w-[30px] h-2 rounded-full " />
          </div>

          <div className="w-full h-fit  flex flex-col items-center justify-start gap-y-8">
            <Skeleton className="w-full h-[50px] rounded-full my-4" />

            <Skeleton className="w-full h-[50px] rounded-full my-4" />
          </div>
          <div className="w-full h-fit ">
            <Skeleton className="w-full h-6 rounded-full my-4" />
            <div className="w-full flex flex-col items-start gap-y-2">
              <Skeleton className="w-full h-4 rounded-full " />
              <Skeleton className="w-[70%] h-4 rounded-full " />
              <Skeleton className="w-[30%] h-4 rounded-full " />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
