"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MobilSideBar() {
  const router = useRouter();

  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.menu className="w-5 h-5 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-4">
          <div className={cn("pb-12")}>
            <div className="space-y-4 py-4">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  Travail
                </h2>
                <div className="space-y-1">
                  <Button
                    onClick={() => router.push("/admin")}
                    variant={path === "/admin" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icons.Home className="w-4 h-4 mr-2 " />
                    Aperçu
                  </Button>
                  <Button
                    onClick={() => router.push("/admin/orders")}
                    variant={path.includes("/orders") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icons.Order className="w-4 h-4 mr-2 " />
                    Commandes
                  </Button>
                </div>
              </div>
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  Magasin{" "}
                </h2>
                <div className="space-y-1">
                  <Button
                    onClick={() => router.push("/admin/products")}
                    variant={path.includes("/products") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icons.Prodcuts className="w-4 h-4 mr-2 " />
                    Produits
                  </Button>

                  <Button
                    onClick={() => router.push("/admin/settings")}
                    variant={path === "/analitycs" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icons.settings className="w-4 h-4 mr-2 " />
                    Paramètres
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
