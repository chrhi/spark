import type { FC } from "react";

interface TopLineAbdullahProps {}

const TopLine: FC = ({}) => {
  return (
    <div className="w-full bg-black h-[36px] flex items-center justify-center">
      <p className="text-white text-sm ">
        Free shipping available on all orders!
      </p>
    </div>
  );
};

export default TopLine;
