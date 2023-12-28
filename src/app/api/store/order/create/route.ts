import { db } from "@/lib/db";
import { ProductEntry } from "@/types";

export async function POST(request: Request) {
  // verify auth

  // validate the request

  const payload = await request.json();

  console.log("this is from the backend ");

  console.log(payload);
  console.log(payload?.products);

  const products = payload?.products as ProductEntry[];

  await db.order.create({
    data: {
      baladia: payload.baladia,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      phone_number: payload.phoneNumber,
      street: payload.street,
      willaya: payload.willaya,
      products: JSON.stringify(payload.products),
    },
  });

  // create new customer

  await db.customer.create({
    data: {
      baladia: payload.baladia,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      phone_number: payload.phoneNumber,
      street: payload.street,
      willaya: payload.willaya,
    },
  });

  // reduce the amount of products availabe for sale
  Promise.all(
    products.map(async (item) => {
      const currentProduct = await db.product.findUnique({
        where: {
          id: item.product.id,
        },
      });
      if (!currentProduct) {
        throw new Error(
          "something went wrong on the server during the order creation"
        );
      }

      const update = await db.product.update({
        where: {
          id: item.product.id,
        },
        data: {
          inventory: currentProduct?.inventory - item.qnt,
        },
      });
    })
  );

  return new Response("OK", {
    status: 200,
  });
}
