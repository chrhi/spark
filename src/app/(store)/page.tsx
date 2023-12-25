import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "./_components/Banner";
import ProductsLine from "./_components/products-line";
import ProductListing from "./_components/ProductListing";
import { Product } from "@prisma/client";
import { db } from "@/lib/db";
import { StoredFile } from "@/types";

async function getData(): Promise<Product[]> {
  const products = await db.product.findMany();
  // Fetch data from your API here.
  return products;
}

export default async function Home() {
  const products = await getData();

  return (
    <>
      <Banner />
      <MaxWidthWrapper>
        <div className="my-4 w-full h-[200px] flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-4xl mt-2 lg:text-5xl font-semibold text-center text-black">
            Obsessive Attention. Intelligent Effort.
          </h1>
          <p className="text-center text-gray-700  text-lg lg:text-xl ">
            Functional handbags made of luxurious materials to improve
            people&apos;s lives in small but mighty ways.
          </p>
        </div>
        {/* <ProductsLine title="Best salles" /> */}

        <ProductsLine title="Best sells" href="/">
          {products.map((item, index) => {
            return (
              <ProductListing
                key={item.id + "best sells"}
                index={index}
                product={{
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
        </ProductsLine>
      </MaxWidthWrapper>
    </>
  );
}
