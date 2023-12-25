import { productSchema } from "@/lib/validators/product";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  // verify auth

  // validate the request

  const payload = await request.json();

  console.log("this is what we get from the body");
  console.log(payload);

  await db.product.create({
    data: {
      CompareAtPrice: payload?.CompareAtPrice,
      CostPerItem: payload?.CostPerItem,
      name: payload?.name,
      price: payload?.price,
      description: payload?.description,
      category: payload?.category,
      images: JSON.stringify(payload?.images as string),
      inventory: payload?.inventory,
      subCategory: payload?.subcategory,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/products");

  return new Response("OK", {
    status: 200,
  });
}
