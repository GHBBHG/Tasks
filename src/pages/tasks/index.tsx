import { FormEventHandler, useState } from "react";
import { TasksList } from "../../components/tasksList";
import { z } from "zod";
import { useTasks } from "../../hooks/useTasks";
import { useProject } from "../../hooks/useProject";
import { Archive, PlusIcon } from "lucide-react";
import { sucess } from "../../components/sweetAlert/sucess";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { TextArea } from "../../components/labels/TextArea";
import { Select } from "../../components/labels/Select";

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
  const { createTask } = useTasks();
  const { project } = useProject();
  const [showModalTasks, setShowModalTasks] = useState(false);

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
    console.log(formData);
  };

  const reloadNewTask = () => location.reload();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const taskData = CreateTaskSchema.parse(formData);
    const response = await createTask(taskData);
    if (response != null) {
      setShowModalTasks(false);
      setTimeout(reloadNewTask, 1500);
      sucess.fire({
        title: "Sua tarefa foi criada",
        icon: "success",
      });
    }
  };

  return (
    <>
      <div className="pb-40">
        <div className="pl-40 sm:pl-8 pt-10 pb-0 text-5xl font-medium text-slate-200">
          Tarefas
        </div>
        <div className="flex justify-end mx-auto w-[90%] mb-10 gap-2">
          <Link to="/tarefas/arquivadas" className="flex items-center">
            <button title="Tarefas arquivadas" className="text-5xl text-white">
              <Archive size={32} />
            </button>
          </Link>
          <button
            title="Nova tarefa"
            className="text-5xl text-white"
            onClick={() => setShowModalTasks(true)}
          >
            <PlusIcon size={40} />
          </button>
        </div>
        <TasksList />
      </div>
      {showModalTasks && (
        <Modal closeModal={() => setShowModalTasks(false)}>
          <div className="text-4xl sm:text-2xl font-medium text-white w-full text-left mt-2 mb-8 ml-12 sm:ml-0 sm:text-center">
            Adicionar tarefa
          </div>
          <div className="w-[90%] mx-auto">
            <form onSubmit={handleSubmit}>
              <TextArea
                label="Título:"
                name="title"
                required={true}
                onChange={handleChangeInput}
              />

              <TextArea
                label="Descrição:"
                name="description"
                required={true}
                onChange={handleChangeInput}
              />

              <TextArea
                label="Branch:"
                name="branch"
                required={true}
                onChange={handleChangeInput}
              />

              <Select
                label="Status:"
                name="status"
                required={true}
                onChange={handleChangeInput}
                options={[
                  {
                    label: "A fazer",
                    title: "todo",
                  },
                  {
                    label: "Em progresso",
                    title: "doing",
                  },
                  {
                    label: "Finalizado",
                    title: "done",
                  },
                ]}
              />

              <Select
                label="Prioridade:"
                name="priority"
                required={true}
                onChange={handleChangeInput}
                options={[
                  {
                    label: "baixa",
                    title: "baixa",
                  },
                  {
                    label: "media",
                    title: "media",
                  },
                  {
                    label: "alta",
                    title: "alta",
                  },
                ]}
              />

              <Select
                label="Projeto:"
                name="projects"
                required={true}
                onChange={handleChangeInput}
                options={project.map((project) => ({
                  label: project.name,
                  title: project.name,
                }))}
              />

              <br />
              <br />
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
        </Modal>
      )}
    </>
  );
}
