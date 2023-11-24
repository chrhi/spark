"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string;
  image: string;
  status: "active" | "unactive";
  title: string;
  units: number;
  price: number;
};

export const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "title",
    header: "Product",
  },
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    accessorKey: "units",
    header: "Units",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];
