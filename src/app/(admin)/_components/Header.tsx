import type { FC } from "react";
import Logo from "./logo";
import SwitchToStoreAbdullahProps from "./switch-to-store";
import { MobilSideBar } from "./mobil-sidebar";

const Header: FC = ({}) => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b  bg-black backdrop-blur-lg transition-all">
      <div className="mx-auto px-4  w-full items-center h-full flex justify-between">
        <div className="md:hidden">
          <MobilSideBar />
        </div>
        <div className="hidden md:block">
          <Logo />
        </div>

        <SwitchToStoreAbdullahProps />
      </div>
    </nav>
  );
};

export default Header;
