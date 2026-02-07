# Task Manager Application

A simple Task Manager application built using **React** and **TypeScript** as part of a frontend skill test.

---

## Features

- Create a task
- View tasks in a tabular format
- Update task status  
  - Status flow: **Pending → In Progress → Completed**
- Delete tasks with confirmation
- Persistent data using browser **localStorage**
- Clean, enterprise-style UI with modal-based interactions

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS (no external UI libraries)

---

##  Design Decisions

- **Frontend-only solution**: No backend/API was specified, so persistence is handled using `localStorage`.
- **Single reusable modal**: A single modal component is used for both task creation and status updates to avoid duplication.
- **Controlled status transitions**: Only valid next statuses are allowed to prevent invalid state changes.
- **No overengineering**: Focused on clarity, correctness, and maintainability within the given time limit.

---

##  Project Structure
## project run
npm install
npm run dev