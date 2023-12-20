import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "./_components/Banner";
import ProductsLine from "./_components/products-line";
import ProductListing from "./_components/ProductListing";

export default function Home() {
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
        <ProductListing
          index={9}
          product={{
            category: "rolex",
            description:
              "this is hight quality watch you need to have in your packet",
            images: ["/rolex.webp"],
            name: "rolex detona",
            price: 90000,
            id: "uiiiii",
          }}
        />
      </MaxWidthWrapper>
    </>
  );
}
