import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "./_components/Banner";
import { Product } from "@prisma/client";
import { db } from "@/lib/db";
import { ProdoctsCarousel } from "./_components/products-carousel";

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
      <MaxWidthWrapper className="max-w-screen-2xl px-4">
        <div className="my-8 mt-14 w-full h-[200px] flex flex-col justify-center items-start gap-y-4">
          <h1 className="text-2xl mt-2 lg:text-5xl font-bold  text-start text-black">
            Obsessive Attention. Intelligent Effort.
          </h1>
          <p className="text-start text-gray-700  text-md lg:text-xl ">
            Functional handbags made of luxurious materials to improve
            people&apos;s lives in small but mighty ways.
          </p>
        </div>
        {/* <ProductsLine title="Best salles" /> */}

        <ProdoctsCarousel title="BEST SELLS" products={products} />
        <ProdoctsCarousel title="PARTY LOOKS" products={products} />
        <ProdoctsCarousel title="RECENTLY ADDED" products={products} />
      </MaxWidthWrapper>
    </>
  );
}
