import { useState } from 'react';

interface Props {
  onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
