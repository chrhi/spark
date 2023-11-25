"use server";

import { extendedProductSchema } from "@/lib/validators/product";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function addProductAction(
  rawInput: z.infer<typeof extendedProductSchema>
) {
  const input = extendedProductSchema.parse(rawInput);

  revalidatePath(`/admin/products`);
}
