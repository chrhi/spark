import { db } from "@/lib/db";

export async function GET(req: Request) {
  // varify auth

  const products = await db.product.findMany();

  return new Response(JSON.stringify(products), {
    status: 200,
    statusText: "every thing went right",
  });
}
