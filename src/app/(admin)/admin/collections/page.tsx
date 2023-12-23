import { FC } from "react";
import { DataTable } from "../../_components/table/data-table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Collection } from "@prisma/client";
import { collectionColumns } from "../../_components/table/collection-columns";

interface pageAbdullahProps {}

async function getData(): Promise<Collection[]> {
  const collections = await db.collection.findMany();

  // Fetch data from your API here.
  return collections;
}

const page: FC = async ({}) => {
  const data = await getData();

  return (
    <div className="hidden max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">collections</h2>
          <div className="flex items-center space-x-2">
            <Link
              href={"/admin/collections/add-collection"}
              className={buttonVariants()}
            >
              créer une collection
            </Link>
          </div>
        </div>
        <div>
          <DataTable columns={collectionColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
