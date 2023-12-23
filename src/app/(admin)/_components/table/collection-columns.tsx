"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Collection } from "@prisma/client";

export const collectionColumns: ColumnDef<Collection>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => row.original.products.length,
  },
];
