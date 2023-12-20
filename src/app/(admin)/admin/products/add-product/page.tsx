import { Icons } from "@/components/Icons";
import AddProductForm from "@/components/forms/add-product-form";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import type { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <div className="hidden max-w-[1000px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link
              href={"/admin/products"}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <Icons.left className="w-4 h-4" />
            </Link>
            <h2 className="text-2xl font-semibold  tracking-tight">
              Ajouter un nouveau produit
            </h2>
          </div>
        </div>
        <AddProductForm />
      </div>
    </div>
  );
};

export default page;
