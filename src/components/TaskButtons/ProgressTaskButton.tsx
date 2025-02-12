import { useTasks } from "../../hooks/useTasks";

interface ProgressTaskButtonProps {
  id: string;
  status: string;
}

export function ProgressTaskButton({ id, status }: ProgressTaskButtonProps) {
  const { updateTask } = useTasks();
  const handleUpdate = () => {
    if (status === "todo") updateTask(id, { status: "doing" });
    else if (status === "doing") updateTask(id, { status: "done" });
  };

  return (
    <div className="m-2">
      {status === "todo" ? (
        <button
          className="bg-sky-600 p-2 rounded-lg hover:bg-sky-700 mb-2"
          onClick={handleUpdate}
        >
          Iniciar
        </button>
      ) : (
        <button
          className="bg-green-600 p-2 rounded-lg hover:bg-green-700 mb-2"
          onClick={handleUpdate}
        >
          Concluir
        </button>
      )}
    </div>
  );
}
