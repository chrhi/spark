import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import type { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-screen pt-8 ">
        <h1 className="text-3xl font-bold text-black tracking-tighter">
          Products listed !
        </h1>
        <div className="w-full h-[70px] flex items-center gap-x-4 justify-start">
          <Button>filter</Button>
          <Button>sort by</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
