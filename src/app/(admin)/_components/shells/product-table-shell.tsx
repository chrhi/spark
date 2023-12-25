"use client";

import * as React from "react";
import Link from "next/link";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { catchError, formatDate, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTable } from "../table/data-table";
import { DataTableColumnHeader } from "../table/data-table-head";
import { Product } from "@prisma/client";
import { categories } from "@/constants/CATEGORIES";
import Image from "next/image";
import { StoredFile } from "@/types";

interface ProductsTableShellProps {
  data: Product[];
  pageCount: number;
}

export function ProductsTableShell({
  data,
  pageCount,
}: ProductsTableShellProps) {
  const [selectedRowIds, setSelectedRowIds] = React.useState<string[]>([]);

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<Product, unknown>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value);
              setSelectedRowIds((prev) =>
                prev.length === data.length ? [] : data.map((row) => row.id)
              );
            }}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              row.toggleSelected(!!value);
              setSelectedRowIds((prev) =>
                value
                  ? [...prev, row.original.id]
                  : prev.filter((id) => id !== row.original.id)
              );
            }}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Prodcut" />
        ),
        cell: ({ row }) => {
          const images = JSON.parse(
            row.original.images as string
          ) as StoredFile[];

          return (
            <div className="w-fit h-[40px] flex items-center gap-x-2">
              <Image
                src={images ? images[0]?.url : ""}
                alt={row.original.name}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <p>{row.original.name}</p>
            </div>
          );
        },
      },
      {
        accessorKey: "category",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ cell }) => {
          const category = cell.getValue() as Product["category"];

          return (
            <Badge variant="outline" className="capitalize">
              {category}
            </Badge>
          );
        },
      },
      {
        accessorKey: "price",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Price" />
        ),
        cell: ({ cell }) => formatPrice(cell.getValue() as number),
      },
      {
        accessorKey: "inventory",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Inventory" />
        ),
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ cell }) => formatDate(cell.getValue() as Date),
        enableColumnFilter: false,
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontalIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/stores/products/${row.original.id}`}>
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/product/${row.original.id}`}>View</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    [data]
  );

  function deleteSelectedRows() {
    toast.promise(
      Promise.all(
        selectedRowIds.map((id) =>
          //   deleteProductAction({
          //     id,
          //     storeId,
          //   })
          console.log(id)
        )
      ),
      {
        loading: "Deleting...",
        success: () => {
          setSelectedRowIds([]);
          return "Products deleted successfully.";
        },
        error: (err: unknown) => {
          setSelectedRowIds([]);
          return catchError(err);
        },
      }
    );
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={pageCount}
      filterableColumns={[
        {
          id: "category",
          title: "Category",
          options: categories.map((category) => ({
            label: `${category.category}`,
            value: category.category,
          })),
        },
      ]}
      searchableColumns={[
        {
          id: "name",
          title: "Name",
        },
      ]}
      newRowLink={`/admin/products/add-product`}
      deleteRowsAction={() => void deleteSelectedRows()}
    />
  );
}
