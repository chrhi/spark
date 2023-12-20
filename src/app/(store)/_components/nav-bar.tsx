import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MobilMenu from "@/app/(store)/_components/Mobil-menu";
import type { FC } from "react";
import Search from "./search";
import SearchInput from "./search";
import { ShoppingBag } from "lucide-react";
import { MobileBag } from "./mobil-bag/bag";

interface NavBarAbdullahProps {}

const NavBar: FC = ({}) => {
  return (
    <div className="w-full h-[70px] flex items-center ">
      <MaxWidthWrapper className="mx-auto h-full ">
        <div className="w-full h-full flex items-center justify-between border-b">
          <MobilMenu />
          <p className="text-xl font-bold text-blue-950"> Dawn</p>
          <div className="w-[70px] h-full flex items-center gap-x-4 justify-end px-2">
            <SearchInput />
            <ShoppingBag className="w-5 h-5 hidden md:block " />
            <MobileBag />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
