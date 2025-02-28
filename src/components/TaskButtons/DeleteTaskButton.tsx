import { Trash2 } from "lucide-react";
import { useTasks } from "../../hooks/useTasks";
import { confirmarExcluirTarefa } from "../sweetAlert/confirmarExcluirTarefa";

interface DeleteTaskButtonProps {
  id: string;
  name: string;
}

export function DeleteTaskButton({ id, name }: DeleteTaskButtonProps) {
  const { deleteTask } = useTasks();

  const handleDelete = () => {
    confirmarExcluirTarefa
      .fire({
        title: `Excluir a tarefa "${name}" ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir!",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteTask(id);
          confirmarExcluirTarefa.fire({
            title: "Sua tarefa foi excluída",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="m-2">
      <button
        title="Excluir"
        className="bg-red-600 p-2 px-4 rounded-lg hover:bg-red-700 mb-2"
        onClick={handleDelete}
      >
        <Trash2 size={24} />
      </button>
    </div>
  );
}
