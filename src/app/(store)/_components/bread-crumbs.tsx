import { truncate } from "@/lib/utils";
import Link from "next/link";
import type { FC } from "react";

interface BreadcrumbsAbdullahProps {
  category: string;
  productName: string;
}

const Breadcrumbs: FC<BreadcrumbsAbdullahProps> = ({
  category,
  productName,
}) => {
  return (
    <div className="w-full h-[40px] flex items-center justify-start my-2">
      <Link href={"/"}>
        {" "}
        <span className="text-sm mx-2 text-gray-500">Home</span>
      </Link>{" "}
      &gt;{" "}
      <Link href={"/collection/hhhh"}>
        {" "}
        <span className="text-sm mx-2  text-gray-500">{category}</span>
      </Link>{" "}
      &gt;{" "}
      <span className="text-sm mx-2 font-bold text-gray-700">
        {truncate(productName, 20)}
      </span>
    </div>
  );
};

export default Breadcrumbs;
