"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Playlist, playlists } from "../_data/playlist";
import { Icons } from "@/components/Icons";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const router = useRouter();

  const path = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Work
          </h2>
          <div className="space-y-1">
            <Button
              onClick={() => router.push("/admin")}
              variant={path === "/admin" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Icons.Home className="w-4 h-4 mr-2 " />
              Home
            </Button>
            <Button
              onClick={() => router.push("/orders")}
              variant={path === "/orders" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Icons.Order className="w-4 h-4 mr-2 " />
              Orders
            </Button>
            <Button
              onClick={() => router.push("/customers")}
              variant={path === "/customers" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Icons.Customers className="w-4 h-4 mr-2 " />
              Customers
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Your Store
          </h2>
          <div className="space-y-1">
            <Button
              onClick={() => router.push("/products")}
              variant={path === "/products" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Icons.Prodcuts className="w-4 h-4 mr-2 " />
              Products
            </Button>
            <Button
              onClick={() => router.push("/editor")}
              variant={path === "/banner" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Icons.Banner className="w-4 h-4 mr-2 " />
              Editor
            </Button>
            <Button
              onClick={() => router.push("/analitycs")}
              variant={path === "/analitycs" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Icons.Analytics className="w-4 h-4 mr-2 " />
              Analitycs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
