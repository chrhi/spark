import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import type { FC } from "react";

interface PageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[500px] grid grid-cols-2">
        <div className="bg-blue-500 w-full h-full">
          {/* hado lines  */}
          {/* image slider */}
        </div>
        <div className="flex flex-col gap-y-4  items-start p-4 w-full h-full">
          <h1 className="text-gray-950 text-5xl font-bold text-start">
            T shirt detona something
          </h1>
          {/* price */}
          {/* description */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
