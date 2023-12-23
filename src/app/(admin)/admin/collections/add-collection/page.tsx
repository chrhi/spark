import { Icons } from "@/components/Icons";
import { AddCollectionForm } from "@/components/forms/add-collection-form";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import Link from "next/link";
import type { FC } from "react";

async function getData(): Promise<Product[]> {
  const products = await db.product.findMany();

  // Fetch data from your API here.
  return products;
}

const page: FC = async ({}) => {
  const data = await getData();

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
              Ajouter un nouveau collection
            </h2>
          </div>
        </div>
        <AddCollectionForm products={data} />
      </div>
    </div>
  );
};

export default page;
