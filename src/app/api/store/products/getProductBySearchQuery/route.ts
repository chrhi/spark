import { db } from "@/lib/db";

export async function POST(request: Request) {
  const { query } = await request.json();

  const filteredProducts = await db.product.findMany({
    select: {
      id: true,
      name: true,
      category: true,
    },
    where: {
      OR: [
        {
          name: {
            endsWith: query,
          },
        },
        {
          name: {
            startsWith: query,
          },
        },
        {
          name: {
            contains: query,
          },
        },
        { description: { endsWith: query } },
      ],
    },
  });

  const productsByCategory = Object.values([
    "clothing",
    "shoes",
    "accessories",
  ]).map((category) => ({
    category,
    products: filteredProducts.filter(
      (product) => product.category === category
    ),
  }));

  return new Response(JSON.stringify(productsByCategory), {
    status: 200,
  });
}
