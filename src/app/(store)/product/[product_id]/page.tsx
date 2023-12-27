import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import type { FC } from "react";
import ProductListing from "../../_components/ProductListing";
import ProductsLine from "../../_components/products-line";
import Breadcrumbs from "../../_components/bread-crumbs";
import { ProductImageCarousel } from "../../_components/product-image-carousel";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import { notFound } from "next/navigation";
import { StoredFile } from "@/types";
import AddProductToCard from "../../_components/AddProductToCard";
import { formatPrice } from "@/lib/utils";

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
    <MaxWidthWrapper>
      <div className="w-full min-h-[500px] h-fit grid grid-cols-3 py-2 md:py-6 lg:py-8 ">
        <div className=" flex flex-col w-full h-full  col-span-3 md:col-span-1 lg:col-span-2 ">
          <Breadcrumbs category={product.category} productName={product.name} />

          <ProductImageCarousel
            className="w-full "
            images={JSON.parse(product.images as string) as StoredFile[]}
            options={{
              loop: true,
            }}
          />
          <Separator className="mt-4 md:hidden" />
        </div>
        <div className="flex  flex-col gap-y-4 col-span-3 md:col-span-1 items-start p-4 w-full h-full">
          <h1 className="text-gray-950 text-3xl md:text-5xl font-bold text-start">
            {product.name}
          </h1>
          <p className="text-gray-700 text-xl">
            {" "}
            <span className="text-red-500  text-xl line-through">
              {formatPrice(product.CompareAtPrice)}
            </span>{" "}
            {formatPrice(product.price)}
          </p>

          <div className="w-full h-fit  flex flex-col items-center justify-start gap-y-8">
            <Button
              className="w-full bg-black rounded-full h-[50px]"
              variant="default"
              size="lg"
            >
              Order now
            </Button>
            <AddProductToCard
              product={{
                CompareAtPrice: product.CompareAtPrice,
                continue_selling_when_out_of_stock:
                  product.continue_selling_when_out_of_stock,
                CostPerItem: product.CostPerItem,
                category: product.category,
                description: product.description ? product.description : "",
                id: product.id,
                images: JSON.parse(product.images as string) as StoredFile[],
                name: product.name,
                price: product.price,
              }}
            />
          </div>
          <div className="w-full h-fit ">
            <h3 className="text-xl text-start font-semibold">Description</h3>
            <p className="text-lg text-gray-700 text-start my-4">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
