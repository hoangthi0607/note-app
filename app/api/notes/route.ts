import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  const body = await req.json();
  const note = await prisma.note.create({ data: body });
  return NextResponse.json(note);
}
