import { FC } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const page: FC = ({}) => {
  return (
    <div className="hidden max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">collections</h2>
          <div className="flex items-center space-x-2">
            <Link
              href={"/admin/collections/add-collection"}
              className={buttonVariants()}
            >
              créer une collection
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
