import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "./_components/Banner";
import ProductsLine from "./_components/products-line";
import ProductListing from "./_components/ProductListing";
import ImageSlider from "./_components/ImageSlider";

export default function Home() {
  console.log("mahdi" + "chehri");

  for (let i = 0; i < 10; i++) {
    var m = 7 * i;
    console.log("the value of the multiplications is " + m);
    // console.log("7 x " + i + "=" + m);
  }

  //mahdichehri

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

        {/* this is the new items */}
        <ProductsLine title="Recently added to store" href="/">
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
    </>
  );
}
