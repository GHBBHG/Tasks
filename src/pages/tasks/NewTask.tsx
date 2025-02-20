import { FormEventHandler, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { z } from "zod";

const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  archive: z.string(),
  projects: z.string(),
  branch: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["baixa", "media", "alta"]),
});

export const NewTask: React.FC = () => {
  const { createTask } = useTasks();
  const [isHidden, setIsHidden] = useState("hidden");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    branch: "",
    archive: "0",
    projects: "",
    priority: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const reloadNewTask = () => {
    location.reload();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const taskData = CreateTaskSchema.parse(formData);
    const response = await createTask(taskData);
    if (response != null) {
      setTimeout(reloadNewTask, 1500);
      setIsHidden("");
    }
  };

  return (
    <div className={`bg-zinc-900`}>
      <div className="text-start m-5 mt-0 p-4 pt-0">
        <div
          className={`${isHidden} bg-green-600 text-white font-semibold w-[95%] p-2 my-2 mx-auto rounded-lg`}
        >
          Tarefa criada com sucesso!
        </div>
        <form onSubmit={handleSubmit}>
          <label className="text-white font-medium">Título</label>
          <br></br>
          <textarea
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
            name="title"
            onChange={handleChangeInput}
            required
          ></textarea>
          <br></br>
          <label className="text-white font-medium">Descrição</label>
          <br></br>
          <textarea
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
            name="description"
            onChange={handleChangeInput}
            required
          ></textarea>
          <br></br>
          <label className="text-white font-medium">Branch</label>
          <br></br>
          <textarea
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
            name="branch"
            onChange={handleChangeInput}
            required
          ></textarea>
          <br></br>
          <label className="text-white font-medium">Status</label>
          <br></br>
          <select
            name="status"
            onChange={handleChangeInput}
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
            required
          >
            <option label=""></option>
            <option label="A fazer">todo</option>
            <option label="Em progresso">doing</option>
            <option label="Finalizado">done</option>
          </select>
          <br></br>
          <label className="text-white font-medium">Prioridade</label>
          <br></br>
          <select
            name="priority"
            onChange={handleChangeInput}
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
            required
          >
            <option label=""></option>
            <option label="baixa">baixa</option>
            <option label="media">media</option>
            <option label="alta">alta</option>
          </select>
          <br></br>
          <label className="text-white font-medium">Projeto</label>
          <br></br>
          <select
            name="projects"
            onChange={handleChangeInput}
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
            required
          >
            <option label=""></option>
            <option label="Veplex">Veplex</option>
            <option label="Pedflex">Pedflex</option>
            <option label="Tasks">Tasks</option>
            <option label="Outras">Outras</option>
          </select>
          <br></br>
          <br></br>
          <div className="text-end">
            <button
              className="border-2 rounded-md px-4 py-1 mr-4 text-white"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
