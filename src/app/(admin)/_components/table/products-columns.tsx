"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Product } from "@prisma/client";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Product = {
//   id: string;
//   images: JSON;
//   status: "ACTIVE" | "UNACTIVE";
//   title: string;
//   invantory: number;
//   price: number;
// };

export const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = JSON.parse(row.original.images as string);
      console.log(imageUrl);
      return (
        <Avatar className="w-[45px] h-[45px] !rounded-lg ">
          <AvatarImage src={imageUrl[0]?.url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge className="bg-green-200 " variant="secondary">
          {row.original.status}
        </Badge>
      );
    },
  },

  {
    accessorKey: "inventory",
    header: "Inventory",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];
