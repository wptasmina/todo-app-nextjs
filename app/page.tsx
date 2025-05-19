'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Todo } from '@prisma/client'
import Todos from '@/components/Todos'
import TodoForm from '@/components/TodoForm'



const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch('/api/todos')
  return res.json()
}

export default function HomePage() {
  const queryClient = useQueryClient()
  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  const toggleTodo = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`/api/todos/${id}/toggle`, { method: 'PATCH' })
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo.mutate(todo.id)}
            className={`cursor-pointer ${todo.isCompleted ? 'line-through' : ''}`}
          >
            {todo.title}
          </li>
        ))}
      </ul>


      <Todos todos={todos} onToggle={(id) => toggleTodo.mutate(id)} />
        <TodoForm />
    </div>
  )
}
