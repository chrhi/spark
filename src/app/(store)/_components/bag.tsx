import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import type { FC } from "react";

interface bagAbdullahProps {}

const Bag: FC = ({}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Icons.bag className="w-5 h-5 hidden md:block" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="w-full my-auto h-full flex flex-col gap-y-2 justify-center items-center ">
          <Icons.basket className=" text-gray-700" size={48} strokeWidth={3} />

          <p className="text-xl font-semibold text-center text-gray-700">
            Your card is empty{" "}
          </p>
          <p className="text-center text-gray-600 text-lg">
            Add items to your cart to checkout
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Bag;
