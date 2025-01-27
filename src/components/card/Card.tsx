import { DeleteTaskButton } from "../TaskButtons/DeleteTaskButton";
import { ProgressTaskButton } from "../TaskButtons/ProgressTaskButton";

export function Card (props: any) {
    const classNameHeader = props.colorHeader + " p-1 rounded-2xl font-medium ";
    
    return (
        <div className='mx-auto w-[31%] text-start items-center rounded-xl'>
                <p className={classNameHeader}>{props.nameTask}</p>
                {props.tasks.map(task => (
                    <div className='text-center rounded-lg mt-3 bg-sky-950 text-slate-100'>
                        <div className="flex text-start p-1 pl-2 pr-4 rounded-t-lg font-medium bg-gray-800 justify-between">
                            <div>{task.title}</div>
                            {task.priority === "low" ? 
                                <div className="bg-sky-600 pl-2 pr-2 text-slate-100 rounded-md">{task.priority}</div> :
                                task.priority === "medium" ? 
                                    <div className="bg-yellow-600 pl-2 pr-2 text-slate-100 rounded-md">{task.priority}</div> : 
                                    <div className="bg-red-600 pl-2 pr-2 text-slate-100 rounded-md">{task.priority}</div>
                            }
                        </div>
                        <div className="p-2">
                            {task.description}<br></br>
                        </div>
                        <div className="flex justify-center">
                            {task.status !== "done" ? <ProgressTaskButton id={task.id} status={task.status}/> : <></>}
                            <DeleteTaskButton id={task.id}/>
                        </div>
                    </div>
                ))}
            </div>
    );
}