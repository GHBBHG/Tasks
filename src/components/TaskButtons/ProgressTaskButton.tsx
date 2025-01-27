import { useTasks } from "../../hooks/useTasks";

export function ProgressTaskButton (props) {
    const { updateTask } = useTasks()

    const handleUpdate = (id: string, status: string) => {
        if (status === "todo") 
            updateTask(id, { status: "doing" })
        else if (status === "doing") 
            updateTask(id, { status: "done" })
    }

    return (
        <div className="m-2">
            {props.status === "todo" ? 
                <button className="bg-sky-600 p-2 rounded-lg hover:bg-sky-700 mb-2" onClick={() => handleUpdate(props.id, props.status)}>
                Iniciar
                </button> :
                <button className="bg-green-600 p-2 rounded-lg hover:bg-green-700 mb-2" onClick={() => handleUpdate(props.id, props.status)}>
                Concluir
                </button>}
            
        </div>
    );
}