import { formatPrice } from "@/lib/utils";
import { ProductEntry } from "@/types";
import { Order } from "@prisma/client";

interface Props {
  order: Order;
}

export function RecentSales({ order }: Props) {
  const products = JSON.parse(order?.products as string) as ProductEntry[];

  return (
    <div className="flex items-center">
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">
          {order.firstName} {order.lastName}
        </p>
        <p className="text-sm text-muted-foreground">{order.email}</p>
      </div>
      <div className="ml-auto font-medium">
        +
        {formatPrice(
          products
            .map((item) => item.qnt * Number(item.product.price))
            .reduce((prev, current) => prev + current)
        )}
      </div>
    </div>
  );
}
