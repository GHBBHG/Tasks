import { ArchiveRestore } from "lucide-react";
import { useTasks } from "../../hooks/useTasks";

interface UnarchiveTaskButtonProps {
  id: string;
}

export function UnarchiveTaskButton({ id }: UnarchiveTaskButtonProps) {
  const { updateTask } = useTasks();

  const handleUnarchive = () => {
    updateTask(id, { archive: "0" });
  };

  return (
    <div className="m-2">
      <button
        title="Desarquivar"
        className="bg-lime-600 p-2 px-4 rounded-lg hover:bg-lime-700 mb-2"
        onClick={handleUnarchive}
      >
        <ArchiveRestore size={24} />
      </button>
    </div>
  );
}
