import { Icons } from "@/components/Icons";
import UpdateProductForm from "@/components/forms/update-product-form";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { FC } from "react";

interface PageProps {
  params: {
    product_id: string;
  };
}

async function getData(id: string): Promise<Product | null> {
  const product = await db.product.findFirst({
    where: {
      id,
    },
  });

  // Fetch data from your API here.
  return product;
}

const page: FC<PageProps> = async ({ params }) => {
  const { product_id } = params;

  const product = await getData(product_id);

  if (!product) {
    notFound();
  }

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
              {product.name}
            </h2>
          </div>
        </div>
        <UpdateProductForm product={product} />
      </div>
    </div>
  );
};

export default page;
