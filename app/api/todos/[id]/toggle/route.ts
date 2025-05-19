import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const todo = await prisma.todo.findUnique({ where: { id: params.id } })
  if (!todo) {
    return NextResponse.json({ error: 'Todo not found' }, { status: 404 })
  }

  const updated = await prisma.todo.update({
    where: { id: params.id },
    data: { isCompleted: !todo.isCompleted }, // ✅ ফিল্ড নাম ঠিক করো
  })

  return NextResponse.json(updated)
}
