import { useTasks } from "../../hooks/useTasks";

interface DeleteTaskButtonProps {
  id: string;
}

export function DeleteTaskButton({ id }: DeleteTaskButtonProps) {
  const { deleteTask } = useTasks();
  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className="m-2">
      <button
        className="bg-red-600 p-2 rounded-lg hover:bg-red-700 mb-2"
        onClick={handleDelete}
      >
        Excluir
      </button>
    </div>
  );
}
