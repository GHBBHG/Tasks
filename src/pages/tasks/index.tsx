import { FormEventHandler, useState } from "react";
import { TasksList } from "../../components/tasksList";
import { z } from "zod";
import { useTasks } from "../../hooks/useTasks";
import { useProject } from "../../hooks/useProject";
import { Projects } from "../../entities/Projects";

const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  archive: z.string(),
  projects: z.string(),
  branch: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["baixa", "media", "alta"]),
});

export function Tasks() {
  const [showModal, setShowModal] = useState("hidden");
  const [isHidden, setIsHidden] = useState("hidden");
  const { createTask } = useTasks();
  const { project } = useProject();
  const listProjects: Projects[] = project?.filter((a) => a.name != null) ?? [];

  const abrirModal = () => {
    setShowModal("");
  };

  const fecharModal = () => {
    setShowModal("hidden");
  };

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
    <>
      <div className="pb-96">
        <div className="pl-40 pt-10 pb-0 text-5xl font-medium text-slate-200">
          Tarefas
        </div>
        <div className="flex justify-end mx-auto w-[90%] mb-10 ">
          <button className="text-5xl text-white" onClick={abrirModal}>
            +
          </button>
        </div>
        <TasksList />
      </div>
      <div
        className={`${showModal} w-full h-full p-4 bg-black opacity-[0.8] z-[10000] top-0 left-0 fixed`}
        onClick={fecharModal}
      ></div>
      <div
        className={`${showModal} bg-neutral-800 rounded-xl mx-auto w-[50%] h-[80%] z-[10001] fixed top-[10%] left-[25%] opacity-[1] overflow-y-auto overflow-x-hidden`}
      >
        <div className="w-full text-right p-2 px-4 text-2xl text-white">
          <span onClick={fecharModal} className="cursor-pointer">
            X
          </span>
        </div>
        <div className="text-4xl font-medium text-white w-full text-left mt-2 mb-8 mx-12">
          Adicionar tarefa
        </div>
        <div
          className={`${isHidden} bg-live_green text-white font-semibold w-[90%] p-2 my-2 mx-auto rounded-full`}
        >
          Tarefa criada com sucesso!
        </div>
        <div className="w-[90%] mx-auto">
          <form onSubmit={handleSubmit}>
            <label className="text-white font-medium">Título:</label>
            <br></br>
            <textarea
              className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
              name="title"
              onChange={handleChangeInput}
              required
            ></textarea>
            <br></br>
            <label className="text-white font-medium">Descrição:</label>
            <br></br>
            <textarea
              className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
              name="description"
              onChange={handleChangeInput}
              required
            ></textarea>
            <br></br>
            <label className="text-white font-medium">Branch:</label>
            <br></br>
            <textarea
              className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
              name="branch"
              onChange={handleChangeInput}
              required
            ></textarea>
            <br></br>
            <label className="text-white font-medium">Status:</label>
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
            <label className="text-white font-medium">Prioridade:</label>
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

            <label className="text-white font-medium">Projeto:</label>
            <br></br>
            <select
              name="projects"
              onChange={handleChangeInput}
              className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
              required
            >
              <option label=""></option>
              {listProjects.map((project) => (
                <option label={project.name}>{project.name}</option>
              ))}
            </select>
            <br></br>
            <br></br>
            <div className="text-end mb-8">
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
    </>
  );
}
