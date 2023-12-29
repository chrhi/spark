import { Skeleton } from "@/components/ui/skeleton";
import { DataTableLoading } from "../../_components/table/data-table-loading";

export default function ProductsLoading() {
  return (
    <div className=" max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-7 w-full xs:w-[300px]" />
          </div>
        </div>
        <div>
          <DataTableLoading
            columnCount={6}
            isNewRowCreatable={false}
            isRowsDeletable={false}
          />
        </div>
      </div>
    </div>
  );
}
