import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import type { FC } from "react";
import ProductListing from "../../_components/ProductListing";
import ProductsLine from "../../_components/products-line";
import Breadcrumbs from "../../_components/bread-crumbs";
import { ProductImageCarousel } from "../../_components/product-image-carousel";
import { Separator } from "@/components/ui/separator";

interface PageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full min-h-[500px] h-fit grid grid-cols-3 py-8 ">
        <div className=" flex flex-col w-full h-full col-span-2">
          <Breadcrumbs />

          <ProductImageCarousel
            className="w-full md:w-full"
            images={[
              {
                id: "hhgheyr",
                name: "rolex detona",
                url: "https://watchrapport.com/cdn/shop/products/4a67814350c74a4b7426743682bd25ec_800x.jpg?v=1692390641",
              },
              {
                id: "hhhhhhgheyr",
                name: "rolex detona 2",
                url: "https://watchrapport.com/cdn/shop/products/4a67814350c74a4b7426743682bd25ec_800x.jpg?v=1692390641",
              },
            ]}
            options={{
              loop: true,
            }}
          />
          <Separator className="mt-4 md:hidden" />
        </div>
        <div className="flex flex-col gap-y-4 col-span-1 items-start p-4 w-full h-full">
          <h1 className="text-gray-950 text-5xl font-bold text-start">
            T shirt detona something
          </h1>
          <p className="text-gray-700 text-xl">
            {" "}
            <span className="text-red-500  text-xl line-through">
              450 dz
            </span>{" "}
            300 dz
          </p>
          <div className="w-full  h-fit flex flex-col ">
            <p>Color</p>
            <div className="w-full min-h-[50px] my-4 flex flex-wrap gap-4">
              <Button className="rounded-full bg-black" size="lg">
                Black
              </Button>
              <Button className="rounded-full" variant="ghost" size="lg">
                Pink
              </Button>
              <Button className="rounded-full" variant="ghost" size="lg">
                Blue
              </Button>
              <Button className="rounded-full" variant="ghost" size="lg">
                Night Blue
              </Button>
            </div>
          </div>

          <div className="w-full h-fit flex flex-col ">
            <p>Size</p>
            <div className="w-full min-h-[50px] my-4 h-fit flex flex-wrap gap-4">
              <Button className="rounded-full bg-black" size="lg">
                M
              </Button>
              <Button className="rounded-full" variant="ghost" size="lg">
                Xl
              </Button>
              <Button className="rounded-full" variant="ghost" size="lg">
                Lg
              </Button>
              <Button className="rounded-full" variant="ghost" size="lg">
                Xs{" "}
              </Button>
            </div>
          </div>
          <div className="w-full h-fit  flex flex-col items-center justify-start gap-y-8">
            <Button
              className="w-full bg-black rounded-full h-[50px]"
              variant="default"
              size="lg"
            >
              Order now
            </Button>
            <Button
              className="w-full bg-gray-100 rounded-full h-[50px]"
              variant="secondary"
              size="lg"
            >
              Add to card
            </Button>
          </div>
          <div className="w-full h-fit ">
            <h3 className="text-xl text-start font-semibold">Description</h3>
            <p className="text-lg text-gray-700 text-start my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              corrupti corporis quasi sequi cumque earum inventore voluptas non
              aperiam libero, nostrum quo exercitationem eos tenetur, veritatis
              numquam id. Excepturi, suscipit?
            </p>
          </div>
        </div>
      </div>
      <ProductsLine title="You might also like" href="/">
        <ProductListing
          index={9}
          product={{
            category: "rolex",
            description:
              "this is hight quality watch you need to have in your packet",
            images: [
              "https://watchrapport.com/cdn/shop/products/4a67814350c74a4b7426743682bd25ec_800x.jpg?v=1692390641",
            ],
            name: "rolex detona",
            price: 90000,
            id: "uiiiii",
          }}
        />
        <ProductListing
          index={9}
          product={{
            category: "rolex",
            description:
              "this is hight quality watch you need to have in your packet",
            images: [
              "https://watchrapport.com/cdn/shop/products/4a67814350c74a4b7426743682bd25ec_800x.jpg?v=1692390641",
            ],
            name: "rolex detona",
            price: 90000,
            id: "uiiiii",
          }}
        />
        <ProductListing
          index={9}
          product={{
            category: "rolex",
            description:
              "this is hight quality watch you need to have in your packet",
            images: [
              "https://watchrapport.com/cdn/shop/products/4a67814350c74a4b7426743682bd25ec_800x.jpg?v=1692390641",
            ],
            name: "rolex detona",
            price: 90000,
            id: "uiiiii",
          }}
        />
        <ProductListing
          index={9}
          product={{
            category: "rolex",
            description:
              "this is hight quality watch you need to have in your packet",
            images: [
              "https://watchrapport.com/cdn/shop/products/4a67814350c74a4b7426743682bd25ec_800x.jpg?v=1692390641",
            ],
            name: "rolex detona",
            price: 90000,
            id: "uiiiii",
          }}
        />
      </ProductsLine>
    </MaxWidthWrapper>
  );
};

export default page;
