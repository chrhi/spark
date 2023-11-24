import { FC } from "react";
import { DataTable } from "../_components/table/data-table";
import {
  Product,
  productsColumns,
} from "../_components/table/products-columns";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface pageAbdullahProps {}

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      units: 100,
      price: 900,
      image: "",
      status: "active",
      title: "something not cheap",
    },
    // ...
  ];
}

const page: FC = async ({}) => {
  const data = await getData();

  return (
    <div className="hidden max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <div className="flex items-center space-x-2">
            <Link href={"/products/add-product"} className={buttonVariants()}>
              Add Product
            </Link>
          </div>
        </div>
        <div>
          <DataTable columns={productsColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
