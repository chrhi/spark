import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import type { FC } from "react";

interface FirstSidebarAbdullahProps {}

const FirstSidebar: FC = ({}) => {
  return (
    <div className="w-[70px] bg-white  py-4  border-r h-full  ">
      <Button variant="ghost" className="w-[50px] h-[50px] mx-auto">
        <Icons.layout className="w-8 h-8 text-black" />
      </Button>
      <Button variant="ghost" className="w-[50px] h-[50px] mx-auto">
        <Icons.color className="w-8 h-8 text-black" />
      </Button>
    </div>
  );
};

export default FirstSidebar;
