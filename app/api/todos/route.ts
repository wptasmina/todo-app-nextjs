// app/api/todos/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { todoSchema } from '@/lib/validation'


// GET /api/todos
export async function GET() {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted: true,
    },
  })

  return NextResponse.json(todos)
}

// POST /api/todos
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = todoSchema.parse(body)

    const todo = await prisma?.todo.create({
      data: {
        data: 'some value here',
        title: parsed.title,
        isCompleted: parsed.isCompleted ?? false, // default value
      },
    })

    return NextResponse.json(todo, { status: 201 })
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }
}
