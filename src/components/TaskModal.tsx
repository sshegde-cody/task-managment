import { useEffect, useState } from 'react';
import type { Task, TaskStatus } from '../types/task';

interface Props {
  mode: 'create' | 'update';
  task?: Task | null;
  onClose: () => void;
  onCreate?: (title: string) => void;
  onUpdate?: (id: string, status: TaskStatus) => void;
}

const TaskModal = ({
  mode,
  task,
  onClose,
  onCreate,
  onUpdate,
}: Props) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TaskStatus>('pending');

  useEffect(() => {
    if (mode === 'update' && task) {
      setTitle(task.title);
      setStatus(task.status);
    }
  }, [mode, task]);

  const getStatusOptions = (): TaskStatus[] => {
    if (mode === 'create') return ['pending'];
    if (task?.status === 'pending') return ['in-progress', 'completed'];
    if (task?.status === 'in-progress') return ['completed'];
    return [];
  };

  const handleSubmit = () => {
    if (mode === 'create' && onCreate) {
      if (!title.trim()) return;
      onCreate(title.trim());
    }

    if (mode === 'update' && task && onUpdate) {
      onUpdate(task.id, status);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>{mode === 'create' ? 'Create Task' : 'Update Status'}</h3>
        </div>

        <div className="modal-body">
          <label>Task Name</label>
          <input
            value={title}
            disabled={mode === 'update'}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter task name"
          />

          {mode === 'update' && (
            <>
              <label>Status</label>
              <select
              className='dropdown-input'
                value={status}
                onChange={e => setStatus(e.target.value as TaskStatus)}
              >
                {getStatusOptions().map(opt => (
                  <option key={opt} value={opt}>
                    {opt.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleSubmit}>
            {mode === 'create' ? 'Create' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
