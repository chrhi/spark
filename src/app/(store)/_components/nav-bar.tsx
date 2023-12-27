import MobilMenu from "@/app/(store)/_components/Mobil-menu";
import type { FC } from "react";
import SearchInput from "./search";
import { MobileBag } from "./mobil-bag/bag";
import Bag from "./bag";
import Link from "next/link";
import { ShopeNavigationMenu } from "./navigation-menu";
import ProductsCommandMenu from "./ProductsCommandMenu";
import Bag2 from "./mobil-bag/bag2";

interface NavBarAbdullahProps {}

const NavBar: FC = ({}) => {
  return (
    <div className="w-full h-16 sticky top-0 z-[20] bg-white border-b flex items-center ">
      <div className="mx-auto h-full  w-full max-w-[2500px]  relative px-2.5 md:px-20  ">
        <div className="w-full h-full flex items-center justify-between ">
          <div className="w-[30%] h-full flex justify-start items-center  md:hidden">
            <MobilMenu />
          </div>

          <div className="w-[30%]  h-full md:w-[70%] md:mr-auto flex items-center justify-start gap-x-4">
            <Link href={"/"}>
              <p className="text-2xl font-bold text-black">Spark</p>
            </Link>

            <ShopeNavigationMenu />
          </div>

          <div className="w-[30%] h-full flex items-center gap-x-1 justify-end ">
            <ProductsCommandMenu />
            <div className="hidden md:block">
              <Bag />
            </div>
            <div className="md:hidden ">
              <Bag2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
