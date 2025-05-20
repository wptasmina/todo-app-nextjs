
# ✅ Todo App (Full-Stack)

A full-stack Todo application built with **Next.js**, **TypeScript**, **Zod**, **Zustand**, **Prisma**, **MongoDB**, and **TanStack Query**.

---

## 📋 Project Overview

| Section          | Details                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Project Name** | Todo App                                                                                                                            |
| **Tech Stack**   | Next.js (App Router), TypeScript, Zod, Zustand, Prisma, MongoDB, TanStack Query, Tailwind CSS                                       |
| **Features**     | - Add, toggle, update todos<br>- Real-time UI updates<br>- Client-side state with Zustand<br>- Server-side DB with MongoDB + Prisma |
| **Validation**   | Zod (for input validation)                                                                                                          |
| **State Mgmt**   | Zustand (client-side), TanStack Query (async server data)                                                                           |
| **ORM**          | Prisma                                                                                                                              |
| **Database**     | MongoDB                                                                                                                             |
| **UI Library**   | Tailwind CSS                                                                                                                        |
| **Component**    | `Todos.tsx` for rendering task list                                                                                                 |
| **API Routes**   | `/api/todos` for fetching, toggling todo states                                                                                     |
| **Deployment**   | Supports Vercel or any Node-compatible platform                                                                                     |
| **Goal**         | A clean, full-stack application to manage tasks efficiently with modern tooling                                                     |


## 📦 Installation & Setup

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
````

### 🧪 Run the Development Server

```bash
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file and add:

```env
DATABASE_URL="your-mongodb-connection-string"
```

---

## 📁 Folder Structure

```
/app
  └── api/
  └── components/
  └── todos/
  └── layout.tsx
  └── page.tsx
/lib
  └── prisma.ts
/prisma
  └── schema.prisma
```

---

## 🏗️ Features in Detail

* ✅ Fetch todos from the database
* 🔁 Toggle completion status
* ✍️ Input validation with Zod
* ⚡ Optimistic updates with TanStack Query
* 💾 State sharing with Zustand

---


## 🙋‍♂️ Author

Developed by **Your Name (Tasmina Akter)**
🔗 [Portfolio](https://your-portfolio-link.com)


