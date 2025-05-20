// components/TodoForm.tsx
'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todoSchema } from '@/lib/validation'

export default function TodoForm() {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const queryClient = useQueryClient()

const addTodo = useMutation({
  mutationFn: async () => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }), // ✅ now valid for schema
    })

    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.error || 'Something went wrong')
    }

    return res.json()
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
    setTitle('')
  },
  onError: (err: any) => {
    setError(err.message)
  },
})


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      todoSchema.parse({ title })
      addTodo.mutate()
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Enter todo"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2"
        disabled={addTodo.isPending}
      >
        {addTodo.isPending ? 'Adding...' : 'Add'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  )
}
