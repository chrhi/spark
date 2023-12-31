"use client";

import type { FC } from "react";
import { useStore } from "@/lib/zustand/store";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import { formatPrice } from "@/lib/utils";

interface YourBagShowCaseAbdullahProps {}

const YourBagShowCase: FC = ({}) => {
  const products = useStore((state) => state.card);
  const reduceQuantity = useStore((state) => state.reduceQuantity);
  const addQuantity = useStore((state) => state.addQuantity);

  const RemoveProductToCard = useStore((state) => state.RemoveProductToCard);
  if (products.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-start p-4">
        <div className="w-full h-[100px] flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold ">Your Shopping bag</h1>
        </div>

        <div className="w-full my-auto h-full flex flex-col gap-y-2 justify-center items-center ">
          <Icons.basket className=" text-gray-700" size={48} strokeWidth={3} />

          <p className="text-xl font-semibold text-center text-gray-700">
            Your card is empty{" "}
          </p>
          <p className="text-center text-gray-600 text-lg">
            Add items to your cart to checkout
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-start p-4">
      <div className="w-full h-[100px] flex flex-col gap-y-2">
        <h1 className="text-2xl font-bold ">Your Shopping bag</h1>
        <p className="text-lg font-semibold text-gray-700 ">total amout</p>
        <p>
          {formatPrice(
            products
              .map((item) => item.product.price)
              .reduce((total, current) => Number(total) + Number(current))
          )}
        </p>
      </div>

      <div className="w-full h-fit flex flex-col my-4 gap-y-4">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product?.product?.id} className="flex py-6">
              <div className="h-24 w-24 relative flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image
                  src={product?.product?.images[0].url as string}
                  alt={product?.product?.name}
                  className="h-full w-full object-cover object-center"
                  fill
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
                    <p className="ml-4">{formatPrice(product.product.price)}</p>
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
                      onClick={() => RemoveProductToCard(product?.product?.id)}
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
  );
};

export default YourBagShowCase;
