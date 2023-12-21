import { Icons } from "@/components/Icons";
import Image from "next/image";
import type { FC } from "react";

const Logo: FC = ({}) => {
  return (
    <div className="w-[50px]  h-[50px] flex items-center justify-center">
      <Image alt="logo" src={"/logo2.png"} width={40} height={40} />
      {/* <Icons.logo className="w-5 h-5" /> */}
    </div>
  );
};

export default Logo;
