import { FormEventHandler, useState } from "react";
import { z } from "zod";
import { useProject } from "../../hooks/useProject";
import { ProjectsList } from "../../components/projectsList";

export const TasksByProjects = () => {
  const { createProject } = useProject();

  const [showModal, setShowModal] = useState("hidden");
  const [isSuccessHidden, setIsSuccessHidden] = useState("hidden");
  const [formData, setFormData] = useState({ name: "" });

  const reloadProjects = () => location.reload();
  const CreateProjectSchema = z.object({
    name: z.string(),
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const projectData = CreateProjectSchema.parse(formData);
    const response = await createProject(projectData);

    if (response != null) {
      setTimeout(reloadProjects, 1500);
      setIsSuccessHidden("");
      return;
    }
  };

  return (
    <>
      <div className="pb-80">
        <div className="pl-40 pt-10 pb-0 text-5xl font-medium text-slate-200">
          Projetos
        </div>

        <div className="flex justify-end mx-auto w-[85%] ">
          <button
            className="text-5xl text-white"
            onClick={() => setShowModal("")}
          >
            +
          </button>
        </div>

        <div className="flex flex-wrap gap-6 w-full min-h-60 mx-auto items-center justify-center p-20">
          <ProjectsList />
        </div>
      </div>
      <div
        className={`${showModal} w-full h-full p-4 bg-black opacity-[0.8] z-[10000] top-0 left-0 fixed`}
        onClick={() => setShowModal("hidden")}
      ></div>
      <div
        className={`${showModal} bg-neutral-800 rounded-xl mx-auto w-[50%] h-[60%] z-[10001] fixed top-[20%] left-[25%] opacity-[1] overflow-y-auto overflow-x-hidden`}
      >
        <div className="w-full text-right p-2 px-4 text-2xl text-white">
          <span
            onClick={() => setShowModal("hidden")}
            className="cursor-pointer"
          >
            X
          </span>
        </div>
        <div className="text-4xl font-medium text-white w-full text-left mt-2 mb-8 mx-12">
          Adicionar projeto
        </div>
        <div
          className={`${isSuccessHidden} bg-live_green text-white font-semibold w-[90%] p-2 my-2 mx-auto rounded-full`}
        >
          Tarefa criada com sucesso!
        </div>
        <div className="w-[90%] mx-auto">
          <form onSubmit={handleSubmit}>
            <label className="text-white font-medium">Nome: </label>
            <br></br>
            <textarea
              className="border-2 p-1 w-full h-10 bg-gray-700 rounded-md text-white"
              name="name"
              onChange={handleChangeInput}
              required
            ></textarea>
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
      </div>
    </>
  );
};
