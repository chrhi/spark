import { productSchema } from "@/lib/validators/product";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  // verify auth

  // validate the request

  const data = await request.json();

  await db.product.create({
    data: {
      CompareAtPrice: data?.CompareAtPrice,
      CostPerItem: data?.CostPerItem,
      name: data?.name,
      price: data?.price,
      description: data?.description,
      category: data?.category,
      images: JSON.stringify(data?.images as string),
      inventory: data?.inventory,
      subCategory: data?.subcategory,
      continue_selling_when_out_of_stock:
        data?.continue_selling_when_out_of_stock,
      status: data?.status,
    },
  });

  return new Response("OK", {
    status: 200,
  });
}
