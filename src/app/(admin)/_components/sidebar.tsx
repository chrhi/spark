"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const router = useRouter();

  const path = usePathname();

  return (
    <div className={cn("pb-12 hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Travail
          </h2>
          <div className="space-y-2">
            <Link href={"/admin"}>
              <Button
                variant={path === "/admin" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Icons.Home className="w-4 h-4 mr-2 " />
                Aperçu
              </Button>
            </Link>
            <Link href={"/admin/orders"}>
              <Button
                variant={path.includes("/orders") ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Icons.Order className="w-4 h-4 mr-2 " />
                Commandes
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Magasin{" "}
          </h2>
          <div className="space-y-2">
            <Link href={"/admin/products"}>
              <Button
                variant={path.includes("/products") ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Icons.Prodcuts className="w-4 h-4 mr-2 " />
                Produits
              </Button>
            </Link>
            <Link href={"/admin/settings"}>
              <Button
                variant={path === "/analitycs" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Icons.settings className="w-4 h-4 mr-2 " />
                Paramètres
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
