import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted: true, // ✅ এটা থাকা জরুরি
    },
  })

  return NextResponse.json(todos)
}
