import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  //   const payload = await request.json();

  //   const { id } = payload;
  //   if (!id || typeof id !== typeof "") {
  //     return new Response("OK", {
  //       status: 400,
  //     });
  //   }

  //   await db.order.delete({
  //     where: { id },
  //   });

  const id = request.cookies.get("id")?.value;

  console.log(id);
  return new Response("OK", {
    status: 200,
  });
}
