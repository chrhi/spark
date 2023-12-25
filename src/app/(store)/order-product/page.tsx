import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full min-h-screen h-fit grid grid-cols-2 ">
        <div className="w-full my-8 rounded-xl h-[80%]  bg-gray-50"></div>
        <div className="w-full h-full  p-6"></div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
