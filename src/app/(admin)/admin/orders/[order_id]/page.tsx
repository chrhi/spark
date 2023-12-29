import { Icons } from "@/components/Icons";
import UpdateProductForm from "@/components/forms/update-product-form";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Order } from "@prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateOrderStatus from "@/app/(admin)/_components/update-order-status";
import { ProductEntry } from "@/types";
import Image from "next/image";

interface PageProps {
  params: {
    order_id: string;
  };
}

async function getData(id: string): Promise<Order | null> {
  const order = await db.order.findFirst({
    where: {
      id,
    },
  });

  // Fetch data from your API here.
  return order;
}

const page: FC<PageProps> = async ({ params }) => {
  const { order_id } = params;

  const order = await getData(order_id);

  if (!order) {
    notFound();
  }

  const products = JSON.parse(order?.products as string) as ProductEntry[];

  return (
    <div className="hidden max-w-[1000px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link
              href={"/admin/orders"}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <Icons.left className="w-4 h-4" />
            </Link>
            <h2 className="text-2xl font-semibold  tracking-tight">
              order details
            </h2>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>An order from {order.firstName} </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Field</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">first name</TableCell>
                    <TableCell>{order.firstName}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">last name</TableCell>
                    <TableCell>{order.lastName}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">email</TableCell>
                    <TableCell>{order.email}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">phone</TableCell>
                    <TableCell>{order.phone_number}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">willaya</TableCell>
                    <TableCell>{order.willaya}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">baladia</TableCell>
                    <TableCell>{order.baladia}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">street</TableCell>
                    <TableCell>{order.street}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">status</TableCell>
                    <TableCell>
                      {order.confirmed ? "confirmed" : "waiting"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">shipping</TableCell>
                    <TableCell>{order.shipping || "DZD  0.00"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total</TableCell>
                    <TableCell>{order.total || "DZD  0.00"}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardFooter>
          </Card>
          <Card className="my-4">
            <CardHeader>
              <CardTitle>Order Bag</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="w-full min-h-[100px] h-fit flex items-center justify-start gap-4 flex-wrap">
              {products.map((product) => {
                return (
                  <li key={product?.product?.id} className="flex py-6">
                    <div className="h-24 w-24  relative flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={product?.product?.images[0].url as string}
                        alt={product?.product?.name}
                        className="h-full w-full object-cover object-center"
                        fill
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product?.product?.id}>
                              {product?.product?.name}
                            </a>
                          </h3>
                          <p className="ml-4">{product.product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product?.product?.category}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center gap-x-1">
                          <p className="text-gray-500">Qty {product?.qnt}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </CardContent>
          </Card>

          <UpdateOrderStatus id={order.id} />
        </div>
      </div>
    </div>
  );
};

export default page;
