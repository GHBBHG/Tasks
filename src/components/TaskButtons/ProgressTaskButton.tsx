import { BookmarkCheck, Play } from "lucide-react";
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
          title="Iniciar"
          className="bg-sky-600 p-2 px-4 rounded-lg hover:bg-sky-700 mb-2"
          onClick={handleUpdate}
        >
          <Play size={24} />
        </button>
      ) : (
        <button
          title="Finalizar"
          className="bg-green-600 p-2 px-4 rounded-lg hover:bg-green-700 mb-2"
          onClick={handleUpdate}
        >
          <BookmarkCheck size={24} />
        </button>
      )}
    </div>
  );
}
