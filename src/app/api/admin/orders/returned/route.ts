import { db } from "@/lib/db";

export async function POST(request: Request) {
  // verify auth

  // validate the request

  const payload = await request.json();

  const { id } = payload;
  if (!id || typeof id !== typeof "") {
    return new Response("OK", {
      status: 400,
    });
  }

  await db.order.update({
    data: {
      retured: true,
    },
    where: {
      id: payload?.id,
    },
  });

  return new Response("OK", {
    status: 200,
  });
}
