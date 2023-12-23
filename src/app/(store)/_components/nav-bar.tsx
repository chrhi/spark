import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MobilMenu from "@/app/(store)/_components/Mobil-menu";
import type { FC } from "react";
import Search from "./search";
import SearchInput from "./search";
import { ShoppingBag } from "lucide-react";
import { MobileBag } from "./mobil-bag/bag";
import { Button } from "@/components/ui/button";
import Bag from "./bag";
import Link from "next/link";

interface NavBarAbdullahProps {}

const NavBar: FC = ({}) => {
  return (
    <div className="w-full h-[70px] flex items-center ">
      <MaxWidthWrapper className="mx-auto h-full ">
        <div className="w-full h-full flex items-center justify-between border-b">
          <MobilMenu />
          <div className="w-[100px] md:w-[70%] md:mr-auto flex items-center justify-start gap-x-2">
            <Link href={"/"}>
              <p className="text-2xl font-bold text-black"> Dawn</p>
            </Link>
            <Button variant="ghost">Man</Button>
            <Button variant="ghost">Woman</Button>
            <Button variant="ghost">Kids</Button>
          </div>
          <div className="w-[70px] h-full flex items-center gap-x-4 justify-end px-2">
            <SearchInput />
            {/* <ShoppingBag className="w-5 h-5 hidden md:block " /> */}
            <MobileBag />
            <Bag />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
