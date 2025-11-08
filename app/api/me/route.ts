import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const user = await getUserFromToken(token);
  if (!user) return NextResponse.json(null);
  return NextResponse.json({ id: user.id, name: user.name, email: user.email });
}
