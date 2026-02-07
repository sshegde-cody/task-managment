import type { Task } from "../type/task";

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onUpdateStatus: (task: Task) => void;
}

const TaskList = ({ tasks, onDelete, onUpdateStatus }: Props) => {
  if (tasks.length === 0) {
    return <p className="empty">No tasks available</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>

              <td>
                <span className={`status ${task.status}`}>
                  {task.status.replace("-", " ")}
                </span>
              </td>

              <td className="action-cell">
                {/* UPDATE STATUS (Edit icon) */}
                {task.status !== "completed" && (
                  <div
                    className="btn-outline-primary-icon btn-sm"
                    title="Update Status"
                    onClick={() => onUpdateStatus(task)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10z" />
                      <path d="M11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5z" />
                    </svg>
                  </div>
                )}

                {/* DELETE (Trash icon) */}
                <div
                  className="btn-outline-primary-icon btn-sm danger"
                  title="Delete Task"
                  onClick={() => onDelete(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 5.5A.5.5 0 0 1 8.5 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
                    <path d="M10.5 5.5A.5.5 0 0 1 11 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
