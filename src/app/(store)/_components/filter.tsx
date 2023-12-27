"use client";

import type { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn, toTitleCase } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { Option } from "@/types";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface filterAbdullahProps {}

const Filter: FC = ({}) => {
  const id = React.useId();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  // Search params
  const page = searchParams?.get("page") ?? "1";
  const per_page = searchParams?.get("per_page") ?? "8";
  const sort = searchParams?.get("sort") ?? "createdAt.desc";
  const store_ids = searchParams?.get("store_ids");
  const store_page = searchParams?.get("store_page") ?? "1";
  const categoriesParam = searchParams?.get("categories");
  const subcategoriesParam = searchParams?.get("subcategories");

  // Create query string
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  // Price filter
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    0, 500,
  ]);
  const debouncedPrice = useDebounce(priceRange, 10000);

  React.useEffect(() => {
    const [min, max] = debouncedPrice;
    startTransition(() => {
      const newQueryString = createQueryString({
        price_range: `${min}-${max}`,
      });

      router.push(`${pathname}?${newQueryString}`, {
        scroll: false,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPrice]);

  // Category filter
  const [selectedCategories, setSelectedCategories] = React.useState<
    Option[] | null
  >(
    categoriesParam
      ? categoriesParam.split(".").map((c) => ({
          label: toTitleCase(c),
          value: c,
        }))
      : null
  );

  React.useEffect(() => {
    startTransition(() => {
      const newQueryString = createQueryString({
        categories: selectedCategories?.length
          ? // Join categories with a dot to make search params prettier
            selectedCategories.map((c) => c.value).join(".")
          : null,
      });

      router.push(`${pathname}?${newQueryString}`, {
        scroll: false,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label="Filter products" size="sm" disabled={isPending}>
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="px-1">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="flex flex-1 flex-col gap-5 overflow-hidden px-1">
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              Price range ($)
            </h3>
            <Slider
              variant="range"
              thickness="thin"
              defaultValue={[0, 500]}
              max={500}
              step={1}
              value={priceRange}
              onValueChange={(value: typeof priceRange) => setPriceRange(value)}
            />
            <div className="flex items-center space-x-4">
              <Input
                type="number"
                inputMode="numeric"
                min={0}
                max={priceRange[1]}
                className="h-9"
                value={priceRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setPriceRange([value, priceRange[1]]);
                }}
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                inputMode="numeric"
                min={priceRange[0]}
                max={500}
                className="h-9"
                value={priceRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setPriceRange([priceRange[0], value]);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <Separator className="my-4" />
          <SheetFooter>
            <Button
              aria-label="Clear filters"
              size="sm"
              className="w-full"
              onClick={() => {
                startTransition(() => {
                  router.push(
                    `${pathname}?${createQueryString({
                      price_range: 0 - 100,
                      store_ids: null,
                      categories: null,
                      subcategories: null,
                    })}`
                  );

                  setPriceRange([0, 100]);
                  setSelectedCategories(null);
                });
              }}
              disabled={isPending}
            >
              Clear Filters
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
