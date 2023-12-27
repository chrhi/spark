import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import type { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-[200px] w-[200px] " />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
    </div>
  );
};

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper className="w-full max-w-screen-2xl flex flex-col items-start h-fit">
      <div className="w-full mb-4 h-[150px] pt-8 flex flex-col justify-between  ">
        <Skeleton className="w-[200px] h-6 rounded-full " />
        <div className="h-[50px] w-full flex items-center gap-x-4 justify-start">
          <Skeleton className="w-12 h-6 rounded-lg " />
          <Skeleton className="w-12 h-6 rounded-lg " />
        </div>
      </div>
      <div className="w-full   px-3 min-h-[500px] h-fit grid grid-cols-2 gap-2 md:gap-4   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <ProductPlaceholder key={item + index} />;
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
