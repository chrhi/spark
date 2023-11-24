import Image from "next/image";
import type { FC } from "react";

const Logo: FC = ({}) => {
  return (
    <div className="w-[50px] h-[50px] flex items-center justify-center">
      <Image alt="logo" src={"/logo.png"} width={40} height={40} />
      {/* search */}

      {/* notifications and admin */}
    </div>
  );
};

export default Logo;
