'use client'

import { Todo } from '@prisma/client'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
}

export default function Todos({ todos, onToggle }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onToggle(todo.id)}
          className={`cursor-pointer ${todo.isCompleted ? 'line-through' : ''}`}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  )
}
