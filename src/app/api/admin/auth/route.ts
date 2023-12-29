import { authSchema } from "@/lib/validators/auth";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";

function getJwtSecritKey() {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("there is no secret key");
  }

  return secret;
}

export async function POST(request: Request) {
  const body = await request.json();
  const data = authSchema.parse(body);
  const condition =
    data.email === process.env.STORE_OWNER_EMAIL &&
    data.password === process.env.STORE_OWNER_PASSWORD;
  if (!condition) {
    return NextResponse.json({ status: 401 });
  }
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("10h")
    .sign(new TextEncoder().encode(getJwtSecritKey()));
  const response = NextResponse.json({ status: 200 });
  response.cookies.set({
    name: "jwt",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
