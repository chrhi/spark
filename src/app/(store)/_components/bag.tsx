"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useStore } from "@/lib/zustand/store";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { FC } from "react";

interface bagAbdullahProps {}

const Bag: FC = ({}) => {
  const products = useStore((state) => state.card);
  const reduceQuantity = useStore((state) => state.reduceQuantity);
  const addQuantity = useStore((state) => state.addQuantity);
  const clearCard = useStore((state) => state.clearCard);
  const RemoveProductToCard = useStore((state) => state.RemoveProductToCard);

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="relative" variant="ghost" size="icon">
          <Icons.bag className="w-5 h-5 hidden md:block" />
          {products.length !== 0 && (
            <span className=" w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-[50%] absolute top-0 -right-2">
              {products.length}
            </span>
          )}{" "}
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0 ">
        {products.length === 0 ? (
          <div className="w-full my-auto h-full flex flex-col gap-y-2 justify-center items-center ">
            <Icons.basket
              className=" text-gray-700"
              size={48}
              strokeWidth={3}
            />

            <p className="text-xl font-semibold text-center text-gray-700">
              Your card is empty{" "}
            </p>
            <p className="text-center text-gray-600 text-lg">
              Add items to your cart to checkout
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {products.map((product) => (
                      <li key={product?.product?.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product?.product?.images[0].url as string}
                            alt={product?.product?.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={product?.product?.id}>
                                  {product?.product?.name}
                                </a>
                              </h3>
                              <p className="ml-4">{product.product.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {product?.product?.category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center gap-x-1">
                              <Button
                                onClick={() =>
                                  addQuantity(product?.product?.id)
                                }
                                variant={"ghost"}
                                size="icon"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                              <p className="text-gray-500">
                                Qty {product?.qnt}
                              </p>
                              <Button
                                onClick={() =>
                                  reduceQuantity(product?.product?.id)
                                }
                                variant={"ghost"}
                                size="icon"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                            </div>

                            <div className="flex">
                              <Button
                                onClick={() =>
                                  RemoveProductToCard(product?.product?.id)
                                }
                                variant={"ghost"}
                                type="button"
                                className="font-medium text-blue-600 hover:text-blue-500"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>
                  dz{" "}
                  {products
                    .map((item) => item.product.price)
                    .reduce(
                      (total, current) => Number(total) + Number(current)
                    )}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  href="/order-product"
                  className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm "
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Bag;
