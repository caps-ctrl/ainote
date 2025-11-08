import jwt from "jsonwebtoken";
import { prisma } from "./prisma";

export const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(userId: number) {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
}

export async function getUserFromToken(token: string | undefined) {
  if (!token) return null;
  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    return user;
  } catch {
    return null;
  }
}
