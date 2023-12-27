import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import type { FC } from "react";
import ProductListing from "../../_components/ProductListing";
import { Product } from "@prisma/client";
import { StoredFile } from "@/types";
import Filter from "../../_components/filter";
import Sort from "../../_components/sort";

interface PageProps {
  params: {
    collection_name: string;
  };
}

const getProducts = async ({
  subCategory,
}: {
  subCategory: string;
}): Promise<Product[] | null> => {
  const products = await db.product.findMany({
    where: {
      subCategory,
    },
  });

  return products;
};

function formatTitle(input: string): string {
  // Remove specified symbols
  const sanitizedString = input.replace(/[-_.]/g, " ");

  // Capitalize the first letter of each word
  const formattedTitle = sanitizedString.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  return formattedTitle;
}

// build the page layout

// fetch the products depanding on the request params and list them

// make the filter functional and add the infinite scrolling to the cake

const page: FC<PageProps> = async ({ params }) => {
  const collection = params.collection_name;

  if (!collection) {
    notFound();
  }

  const products = await getProducts({ subCategory: collection });

  if (!products) {
    throw new Error("this is an error");
  }
  return (
    <MaxWidthWrapper className="w-full flex flex-col items-start h-fit">
      <div className="w-full h-[150px] pt-8 flex flex-col justify-between  ">
        <h1 className="text-3xl font-bold">{formatTitle(collection)}</h1>
        <div className="h-[50px] w-full flex items-center gap-x-4 justify-start">
          <Filter />
          <Sort />
        </div>
      </div>
      <div className="w-full   min-h-[500px] h-fit grid grid-cols-2 gap-2 md:gap-4   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((item, index) => {
          return (
            <ProductListing
              key={item.id}
              index={index}
              product={{
                CompareAtPrice: item.CompareAtPrice,
                continue_selling_when_out_of_stock: item.CompareAtPrice,
                CostPerItem: item.CostPerItem,
                category: item.category,
                description: item.description ? item.description : "",
                images: item.images
                  ? (JSON.parse(item.images as string) as StoredFile[])
                  : [],
                name: item.name,
                price: item.price,
                id: item.id.toString(),
              }}
            />
          );
        })}
        {products.map((item, index) => {
          return (
            <ProductListing
              key={item.id}
              index={index}
              product={{
                CompareAtPrice: item.CompareAtPrice,
                continue_selling_when_out_of_stock: item.CompareAtPrice,
                CostPerItem: item.CostPerItem,
                category: item.category,
                description: item.description ? item.description : "",
                images: item.images
                  ? (JSON.parse(item.images as string) as StoredFile[])
                  : [],
                name: item.name,
                price: item.price,
                id: item.id.toString(),
              }}
            />
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
