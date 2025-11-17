import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const runtime = "nodejs";
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = context;
  const { id } = await params; // ✅ await params

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
  const { title, content } = await req.json();

  const note = await prisma.note.updateMany({
    where: { id: parseInt(id), userId: decoded.id },
    data: { title, content },
  });

  return NextResponse.json({ note });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = context;
  const { id } = await params;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

  await prisma.note.deleteMany({
    where: { id: parseInt(id), userId: decoded.id },
  });

  return NextResponse.json({ message: "Note deleted" });
}
