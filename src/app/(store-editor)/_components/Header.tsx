"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import type { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header: FC = ({}) => {
  const router = useRouter();

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b shadow backdrop-blur-lg bg-white transition-all">
      <div className="mx-auto px-4  w-full items-center h-full flex justify-between">
        <div className="w-[300px] h-full flex items-center justify-start gap-x-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <Icons.left className="w-4 h-4 text-black " />
          </Button>

          <p className="font-semibold text-start text-gray-700 ">Ice Breaker</p>
        </div>

        <div className="w-[600px] h-full flex items-center justify-center">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue
                defaultValue={"HOME_PAGE"}
                placeholder="select page"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="HOME_PAGE">Home Page</SelectItem>
              <SelectItem value="COLLECTION_PAGE">Collection page</SelectItem>
              <SelectItem value="PRODUCT_PAGE">Product page</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-[300px] h-full flex items-center justify-center">
          <Button>save</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
