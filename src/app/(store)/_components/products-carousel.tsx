"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StoredFile } from "@/types";
import ProductListing from "./ProductListing";
import { Product } from "@prisma/client";

interface Props {
  products: Product[];
  title: string;
}

export function ProdoctsCarousel({ products, title }: Props) {
  return (
    <Carousel className="w-full  ">
      <div className="w-full my-6 h-[50px] flex items-center justify-between px-2">
        <h2 className=" text-2xl lg:text-4xl font-bold text-start ">{title}</h2>
        <div className="w-[100px] h-full flex items-center justify-end gap-x-4 ">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent className="w-full ">
        {products.map((item, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4">
            <ProductListing
              key={item.id + "best sells"}
              index={index}
              product={{
                CompareAtPrice: item.CompareAtPrice,
                continue_selling_when_out_of_stock:
                  item.continue_selling_when_out_of_stock,
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
