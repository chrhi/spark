import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import type { FC } from "react";

interface NavBarAbdullahProps {}

const NavBar: FC = ({}) => {
  return (
    <div className="w-full h-[70px] flex items-center ">
      <MaxWidthWrapper className="mx-auto h-full ">
        <div className="w-full h-full flex items-center justify-center border-b">
          <p className="text-xl font-bold text-blue-950"> Dawn</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
