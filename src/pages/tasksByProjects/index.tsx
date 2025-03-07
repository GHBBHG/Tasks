import { FormEventHandler, useState } from "react";
import { z } from "zod";
import { useProject } from "../../hooks/useProject";
import { ProjectsList } from "../../components/projectsList";
import { PlusIcon } from "lucide-react";
import { sucess } from "../../components/sweetAlert/sucess";
import { Modal } from "../../components/Modal";
import { TextArea } from "../../components/labels/TextArea";

export const TasksByProjects = () => {
  const { createProject } = useProject();
  const [showModalProjects, setShowModalProjects] = useState(false);
  const [formData, setFormData] = useState({ name: "" });
  const CreateProjectSchema = z.object({
    name: z.string(),
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const reloadNewProject = () => location.reload();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const projectData = CreateProjectSchema.parse(formData);
    const response = await createProject(projectData);

    if (response != null) {
      setShowModalProjects(false);
      setTimeout(reloadNewProject, 1500);
      sucess.fire({
        title: "Seu projeto foi criado",
        icon: "success",
      });
      return;
    }
  };

  return (
    <>
      <div className="pb-28">
        <div className="pl-40 pt-10 pb-0 text-5xl sm:pl-8  font-medium text-slate-200">
          Projetos
        </div>

        <div className="flex justify-end mx-auto w-[85%] ">
          <button
            title="Novo projeto"
            className="text-5xl text-white"
            onClick={() => setShowModalProjects(true)}
          >
            <PlusIcon size={40} />
          </button>
        </div>

        <div className="flex flex-wrap gap-6 w-full min-h-60 mx-auto items-center justify-center p-20 sm:p-8">
          <ProjectsList />
        </div>
      </div>
      {showModalProjects && (
        <Modal closeModal={() => setShowModalProjects(false)}>
          <div className="text-4xl sm:text-2xl font-medium text-white w-full text-left mt-2 mb-8 ml-12 sm:ml-0 sm:text-center">
            Adicionar projeto
          </div>
          <div className="w-[90%] mx-auto">
            <form onSubmit={handleSubmit}>
              <TextArea
                label="Nome:"
                name="name"
                required={true}
                onChange={handleChangeInput}
              />

              <div className="text-right">
                <button
                  className="border-2 rounded-md px-4 py-1 mt-4 text-white mb-8"
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
};
