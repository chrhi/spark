import { jwtVerify, SignJWT } from "jose";

interface UserJwtPayload {
  jti: string;
  iat: number;
}

function getJwtSecritKey() {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("there is no secret key");
  }

  return secret;
}

export async function verifyToken({ token }: { token: string }) {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecritKey())
    );

    return verified.payload as UserJwtPayload;
  } catch (err) {
    throw new Error("your token has expired");
  }
}
