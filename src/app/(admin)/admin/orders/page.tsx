import { FC } from "react";
import { DateRangePicker } from "../../_components/date-range-picker";
import { ProductsTableShell } from "../../_components/shells/product-table-shell";
import { Order } from "@prisma/client";
import { db } from "@/lib/db";
import { dashboardProductsSearchParamsSchema } from "@/lib/validators/params";
import { OrderTableShell } from "../../_components/shells/order-table-shell";

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
}): Promise<Order[]> {
  let orders: Order[] = [];

  orders = await db.order.findMany({
    where: {
      createdAt:
        start_date && end_date
          ? {
              gte: start_date, // Start of date range
              lte: end_date, // End of date range
            }
          : {},
    },

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
  return orders;
}

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page: FC<PageProps> = async ({ searchParams }) => {
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
    keyof Order | undefined,
    "asc" | "desc" | undefined
  ]) ?? ["createdAt", "desc"];

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
    <div className=" max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <div className="flex items-center space-x-2">
            <DateRangePicker align="end" />
          </div>
        </div>
        <div>
          <OrderTableShell pageCount={pageCount} data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
