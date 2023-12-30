import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Logo: FC = ({}) => {
  return (
    <Link href={"/admin"}>
      <div className="w-[50px]  h-[50px] flex items-center justify-center">
        <Button
          variant="ghost"
          className="hover:bg-black/40 scale-105 duration-200 transition-all"
          size="icon"
        >
          <Image alt="logo" src={"/logo-white.png"} width={40} height={40} />
        </Button>
      </div>
    </Link>
  );
};

export default Logo;
