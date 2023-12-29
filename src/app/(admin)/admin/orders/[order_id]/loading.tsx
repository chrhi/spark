import { Skeleton } from "@/components/ui/skeleton";

export default function Laoding() {
  return (
    <div className=" max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
        <Skeleton className="h-[500px] w-full my-4 " />
        <Skeleton className="h-20 w-full my-4 " />
      </div>
    </div>
  );
}
