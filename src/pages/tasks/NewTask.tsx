import { FormEventHandler, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { z } from "zod";

const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"]),
});

export const NewTask: React.FC = () => {
  const { createTask } = useTasks();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const taskData = CreateTaskSchema.parse(formData);
    await createTask(taskData);
  };

  return (
    <div className="bg-zinc-900">
      <div className="text-start m-5 p-4">
        <form onSubmit={handleSubmit}>
          <label className="text-white font-medium">Título</label>
          <br></br>
          <textarea
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-3xl text-white"
            name="title"
            onChange={handleChangeInput}
            required
          ></textarea>
          <br></br>
          <label className="text-white font-medium">Descrição</label>
          <br></br>
          <textarea
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-3xl text-white"
            name="description"
            onChange={handleChangeInput}
            required
          ></textarea>
          <br></br>
          <label className="text-white font-medium">Status</label>
          <br></br>
          <select
            name="status"
            onChange={handleChangeInput}
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-3xl text-white"
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
            className="border-2 p-1 w-full h-10 bg-gray-700 rounded-3xl text-white"
            required
          >
            <option label=""></option>
            <option label="baixa">low</option>
            <option label="media">medium</option>
            <option label="alta">high</option>
          </select>
          <br></br>
          <br></br>
          <div className="text-end">
            <button
              className="border-2 rounded-md p-[4px] mr-4 text-white"
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
