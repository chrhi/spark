import { FC } from "react";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import { ProductsTableShell } from "../../_components/shells/product-table-shell";
import { Metadata } from "next";
import { dashboardProductsSearchParamsSchema } from "@/lib/validators/params";
import { DateRangePicker } from "../../_components/date-range-picker";

export const metadata: Metadata = {
  title: "Products",
  description: "Manage your products",
};

async function getData({
  start_date,
  end_date,
  page,
  per_page,
  name,
}: {
  start_date: Date | undefined;
  end_date: Date | undefined;
  page: number;
  per_page: number;
  name: string;
}): Promise<Product[]> {
  let products: Product[] = [];

  products = await db.product.findMany({
    skip: page,
    where: {
      createdAt:
        start_date && end_date
          ? {
              gte: start_date, // Start of date range
              lte: end_date, // End of date range
            }
          : {},

      name: name
        ? {
            startsWith: name,
          }
        : {},
    },
    take: per_page,
    orderBy: [
      {
        createdAt: "asc",
      },
      {
        id: "asc",
      },
    ],
  });

  // Fetch data from your API here.
  return products;
}

interface ProductsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page: FC<ProductsPageProps> = async ({ searchParams }) => {
  // Parse search params using zod schema
  const { page, per_page, sort, name, category, from, to } =
    dashboardProductsSearchParamsSchema.parse(searchParams);

  // we have the fetch the data on the client side

  // Fallback page for invalid page numbers
  const pageAsNumber = Number(page);
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber;
  // Number of items per page
  const perPageAsNumber = Number(per_page);
  const limit = isNaN(perPageAsNumber) ? 10 : perPageAsNumber;
  // Number of items to skip
  const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0;
  // Column and order to sort by
  const [column, order] = (sort?.split(".") as [
    keyof Product | undefined,
    "asc" | "desc" | undefined
  ]) ?? ["createdAt", "desc"];

  const categories = (category?.split(".") as Product["category"][]) ?? [];

  const fromDay = from ? new Date(from) : undefined;
  const toDay = to ? new Date(to) : undefined;

  const data = await getData({
    page: pageAsNumber,
    per_page: perPageAsNumber,
    start_date: fromDay,
    end_date: toDay,
    name: name ? name : "",
  });

  const pageCount = Math.ceil(data.length / limit);

  return (
    <>
      {/* <DeleteProductDialog /> */}
      <div className="hidden max-w-[1200px] mx-auto flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Des produits</h2>
            <div className="flex items-center space-x-2">
              <DateRangePicker align="end" />
            </div>
          </div>
          <div>
            <ProductsTableShell pageCount={pageCount} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
