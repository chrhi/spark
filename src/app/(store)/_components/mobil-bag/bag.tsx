"use client";

import { Drawer } from "vaul";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { Ghost, ShoppingBag } from "lucide-react";
import { Icons } from "@/components/Icons";
import { useStore } from "@/lib/zustand/store";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function MobileBag() {
  const products = useStore((state) => state.card);
  const reduceQuantity = useStore((state) => state.reduceQuantity);
  const addQuantity = useStore((state) => state.addQuantity);
  const clearCard = useStore((state) => state.clearCard);
  const RemoveProductToCard = useStore((state) => state.RemoveProductToCard);
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button className="relative" variant="ghost" size="icon">
          <Icons.bag className="w-5 h-5  " />
          {products.length !== 0 && (
            <span className=" w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-[50%] absolute top-0 -right-2">
              {products.length}
            </span>
          )}{" "}
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100  flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 z-[700] left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto h-full relative  flex flex-col justify-between ">
              {/* <Drawer.Title className="font-medium mb-4 text-center ">
                your bag
              </Drawer.Title> */}

              <div className="w-full h-[300px] flex flex-col pt-8 items-center gap-y-8 ">
                <Ghost className="w-12 h-12 text-gray-700" />
                <p className="text-zinc-600 mb-2 text-center text-2xl">
                  your bag is empty
                </p>
              </div>
              <div className="w-full mt-auto mb-8 h-[100px] flex items-center justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-violet-500 p-6 text-white hover:bg-violet-700 w-full font-bold"
                >
                  save
                </Button>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
