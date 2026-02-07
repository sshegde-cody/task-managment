import { useEffect, useState } from "react";
import type { Task, TaskStatus } from "./type/task"
import { loadTasks, saveTasks } from "./utils/storage";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalMode, setModalMode] = useState<"create" | "update" | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // CREATE
  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "pending",
    };

    setTasks((prev) => [...prev, newTask]);
    setModalMode(null);
  };

  // UPDATE STATUS
  const updateStatus = (id: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task)),
    );
    setModalMode(null);
    setSelectedTask(null);
  };

  // DELETE
  const deleteTask = (id: string) => {
    const confirmDelete = window.confirm("Do you want to delete this task?");
    if (!confirmDelete) return;

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // OPEN MODALS
  const openCreate = () => {
    setModalMode("create");
    setSelectedTask(null);
  };

  const openUpdate = (task: Task) => {
    setModalMode("update");
    setSelectedTask(task);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>Task Manager</h2>
      </div>
      <button className="btn-primary" onClick={openCreate}>
        Create
      </button>

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdateStatus={openUpdate}
      />

      {modalMode && (
        <TaskModal
          mode={modalMode}
          task={selectedTask}
          onClose={() => {
            setModalMode(null);
            setSelectedTask(null);
          }}
          onCreate={addTask}
          onUpdate={updateStatus}
        />
      )}
    </div>
  );
}

export default App;
