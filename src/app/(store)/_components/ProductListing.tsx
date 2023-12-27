"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";

import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { isArray } from "util";

interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceholder />;

  //   const label = PRODUCT_CATEGORIES.find(
  //     ({ value }) => value === product.category
  //   )?.label;

  // const validUrls = product.images
  //   .map((image) => image)
  //   .filter(Boolean) as string[];

  if (isVisible && product) {
    return (
      <Link
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
        href={`/product/${product.id}`}
      >
        <div className="flex flex-col w-full ">
          <div className="w-[150px] overflow-hidden h-[170px]  lg:h-[250px] lg:w-[250px]">
            {
              //@ts-expect-error
              isArray(product?.images) && product?.images[0]?.url && (
                <Image
                  key={""}
                  width={200}
                  height={200}
                  className=" object-cover"
                  alt={product.name + "image"}
                  //@ts-expect-error
                  src={product?.images[0]?.url}
                />
              )
            }
          </div>

          <h3 className="mt-4 font-medium text-lg text-gray-700">
            {product.name}
          </h3>

          <p className="mt-1 font-medium text-sm text-gray-900">
            <span className="line-through text-red-500 mr-3">
              {formatPrice(product.CompareAtPrice)}
            </span>{" "}
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }
};

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-[200px] w-[200px] " />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
    </div>
  );
};

export default ProductListing;
