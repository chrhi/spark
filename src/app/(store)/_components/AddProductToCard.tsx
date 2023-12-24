"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/zustand/store";
import { Product } from "@/types";
import type { FC } from "react";

interface AddProductToCardAbdullahProps {
  product: Product;
}

const AddProductToCard: FC<AddProductToCardAbdullahProps> = ({ product }) => {
  const addProductToCard = useStore((state) => state.addProductToCard);
  return (
    <Button
      onClick={() => addProductToCard(product)}
      className="w-full bg-gray-100 rounded-full h-[50px]"
      variant="secondary"
      size="lg"
    >
      Add to card
    </Button>
  );
};

export default AddProductToCard;
