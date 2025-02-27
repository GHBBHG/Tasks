import { Category } from "../entities/Category";
import { Ecommerce } from "../entities/Ecommerce";
import { Projects } from "../entities/Projects";
import { Task } from "../entities/Task";

export const tasksService = {
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
    const data: Task[] = await response.json();
    return data;
  },

  async createTask(attributes: Omit<Task, "id">): Promise<Task> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    const newTask: Task = await response.json();
    return newTask;
  },

  async updateTask(
    id: string,
    attributes: Partial<Omit<Task, "id">>
  ): Promise<Task> {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/tasks/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attributes),
      }
    );
    const updatedTask: Task = await response.json();
    return updatedTask;
  },

  async deleteTask(id: string): Promise<void> {
    await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
  },
};

export const projectService = {
  async fetchProject(): Promise<Projects[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/project`);
    const data: Projects[] = await response.json();
    return data;
  },

  async createProject(attributes: Omit<Projects, "id">): Promise<Projects> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    const newProject: Projects = await response.json();
    return newProject;
  },
};

export const ecommerceService = {
  async fetchEcommerce(): Promise<Ecommerce[]> {
    const response = await fetch(import.meta.env.VITE_STORE_API_URL);
    const data: Ecommerce[] = await response.json();
    return data;
  },
};

export const categoryService = {
  async fetchCategory(): Promise<Category[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/category`);
    const data: Category[] = await response.json();
    return data;
  },

  async createCategory(attributes: Omit<Category, "id">): Promise<Category> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    const newCategory: Category = await response.json();
    return newCategory;
  },
};
