import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { todoSchema } from '@/lib/validation'


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


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = todoSchema.parse(body)

    const todo = await prisma.todo.create({
      data: {
        title: parsed?.title,
        isCompleted: parsed.completed ?? false,
      },
    })

    return NextResponse.json(todo, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }
}

