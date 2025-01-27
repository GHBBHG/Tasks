import { useTasks } from "../../hooks/useTasks";

export function DeleteTaskButton (props) {
    const { deleteTask } = useTasks()
    
    const handleDelete = (id: string) => {
        deleteTask(id)
    }

    return (
        <div className="m-2">
            <button className="bg-red-600 p-2 rounded-lg hover:bg-red-700 mb-2" onClick={() => handleDelete(props.id)}>
                Excluir
            </button>
        </div>
    );
}