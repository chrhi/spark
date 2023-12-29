import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="hidden max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <Skeleton className="h-7  w-32" />
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 h-36 w-full lg:grid-cols-4">
            <Skeleton className="h-full w-full" />
            <Skeleton className="h-full w-full" />
            <Skeleton className="h-full w-full" />
            <Skeleton className="h-full w-full" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 h-[400px] w-full lg:grid-cols-7">
            <Skeleton className="h-full w-full col-span-4" />
            <Skeleton className="h-full w-full col-span-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
