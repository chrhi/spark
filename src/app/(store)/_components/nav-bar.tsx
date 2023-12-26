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
import { ShopeNavigationMenu } from "./navigation-menu";

interface NavBarAbdullahProps {}

const Navs = [
  {
    name: "clothing",
    url: "/",
  },
  {
    name: "Shoes",
    url: "/",
  },
  {
    name: "Accessories",
    url: "/",
  },
];

const NavBar: FC = ({}) => {
  return (
    <div className="w-full h-[70px] sticky top-0 z-[20] bg-white border-b flex items-center ">
      <MaxWidthWrapper className="mx-auto h-full ">
        <div className="w-full h-full flex items-center justify-between border-b">
          <MobilMenu />
          <div className="w-[100px] md:w-[70%] md:mr-auto flex items-center justify-start gap-x-4">
            <Link href={"/"}>
              <p className="text-2xl font-bold text-black"> Spark</p>
            </Link>
            <div className="hidden lg:flex items-center justify-start gap-x-4 h-full w-fit">
              {Navs.map((item) => {
                return (
                  <Button
                    variant="ghost"
                    className="font-bold text-lg text-black"
                    key={item.name}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </div>
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
