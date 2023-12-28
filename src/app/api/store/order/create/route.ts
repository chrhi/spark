import { productSchema } from "@/lib/validators/product";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  // verify auth

  // validate the request

  const payload = await request.json();

  console.log("this is from the backend ");

  console.log(payload);
  console.log(payload?.products);

  await db.order.create({
    data: {
      baladia: payload.baladia,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      phone_number: payload.phone_number,
      street: payload.street,
      willaya: payload.willaya,
      total: payload.total,
      shipping: payload.shipping,
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
      phone_number: payload.phone_number,
      street: payload.street,
      willaya: payload.willaya,
    },
  });

  // reduce the amount of products availabe for sale

  payload?.products.map(item => {
    
    
  })

  const currentProduct = await db.product.findUnique({
    where :{
      id : payload.
    }
  })

  // do the real time

  revalidatePath("/");
  revalidatePath("/admin/products");

  return new Response("OK", {
    status: 200,
  });
}
