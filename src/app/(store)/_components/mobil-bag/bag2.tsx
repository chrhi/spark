"use client";

import type { FC } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/zustand/store";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { Product } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { OrderForm } from "@/components/forms/order-form";

interface bag2AbdullahProps {}

const Bag2: FC = ({}) => {
  const products = useStore((state) => state.card);
  const reduceQuantity = useStore((state) => state.reduceQuantity);
  const addQuantity = useStore((state) => state.addQuantity);
  const clearCard = useStore((state) => state.clearCard);
  const RemoveProductToCard = useStore((state) => state.RemoveProductToCard);

  // in here we will set the state of wich form we are going to display

  const [current, setCurrent] = React.useState<number>(0);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="relative" variant="ghost" size="icon">
          <Icons.bag className="w-5 h-5  " />
          {products.length !== 0 && (
            <span className=" w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-[50%] absolute top-0 -right-2">
              {products.length}
            </span>
          )}{" "}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4 ">
        {current === 1 ? (
          <OrderForm />
        ) : products.length === 0 ? (
          <div className="w-full mt-6 my-auto h-full flex flex-col gap-y-2 justify-center items-center ">
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
          <div className="flow-root">
            <ul role="list" className="my-4 divide-y divide-gray-200">
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
                          onClick={() => addQuantity(product?.product?.id)}
                          variant={"ghost"}
                          size="icon"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                        <p className="text-gray-500">Qty {product?.qnt}</p>
                        <Button
                          onClick={() => reduceQuantity(product?.product?.id)}
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
        )}

        {current === 0 && (
          <DrawerFooter className="mt-4 ">
            <Separator />
            <Button
              size="lg"
              onClick={() => setCurrent(1)}
              disabled={products.length === 0}
            >
              Continue order
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Bag2;
