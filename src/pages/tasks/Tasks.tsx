import { NavigationButton } from '../../components/navigationButton/NavigationButton';
import { TasksList } from '../../components/tasksList/TasksList';
import { TasksContextProvider } from '../../contexts/TasksContext';
import { NewTask } from './NewTask';

export function Tasks () {

    const newTasks = () => {
        const tasks = document.getElementById("blockCreate");

        if(tasks.className == "hidden")
            tasks.className = "";
        else
            tasks.className = "hidden";
    }
    
    return (
        <div className='bg-zinc-900 pb-96'>
            <TasksContextProvider>
                <NavigationButton nameButton="Voltar" linkButton="/" />
                <div className="m-10">
                    <button className="bg-green-500 p-2 rounded-lg hover:bg-green-600" onClick={newTasks}>
                        Nova Tarefa
                    </button>
                </div>
                <div className="hidden" id="blockCreate">
                    <NewTask/>
                </div>
                <TasksList/>
            </TasksContextProvider>
        </div>
    );
};