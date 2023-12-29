import { Metadata } from "next";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Overview } from "../_components/overview";
import { RecentSales } from "../_components/recent-sales";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { ProductEntry } from "@/types";
import { formatPrice } from "@/lib/utils";

const getData = async () => {
  const orders = await db.order.findMany();

  return orders;
};

export default async function DashboardPage() {
  const orders = await getData();

  if (!orders) {
    notFound();
  }

  const products = orders.map((item) => {
    return JSON.parse(item?.products as string) as ProductEntry[];
  });

  const total = products
    .map((item) =>
      item
        .map((subItem) => Number(subItem.product.price))
        .reduce((prev, current) => prev + current)
    )
    .reduce((prev, current) => prev + current);

  return (
    <div className="hidden max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 h-36 w-full lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Revenu total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatPrice(total)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  commandes totales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{orders.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ventes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  retour perdu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  +{orders.filter((item) => item.retured === true).length}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 h-[400px] w-full lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Aperçu</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Ventes récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {orders.map((item) => (
                    <RecentSales key={item.id} order={item} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
