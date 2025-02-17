import { useTasks } from "../../hooks/useTasks";

interface ArchiveTaskButtonProps {
  id: string;
}

export function ArchiveTaskButton({ id }: ArchiveTaskButtonProps) {
  const { updateTask } = useTasks();

  const handleArchive = () => {
    updateTask(id, { archive: "1" });
  };

  return (
    <div className="m-2">
      <button
        className="bg-orange-600 p-2 px-4 rounded-lg hover:bg-orange-700 mb-2"
        onClick={handleArchive}
      >
        Arquivar
      </button>
    </div>
  );
}
