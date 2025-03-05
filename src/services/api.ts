import { Category } from "../entities/Category";
import { Ecommerce } from "../entities/Ecommerce";
import { Projects } from "../entities/Projects";
import { Task } from "../entities/Task";

export const tasksService = {
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch(import.meta.env.VITE_API_URL_TASKS);
    const data: Task[] = await response.json();
    return data;
  },

  async createTask(attributes: Omit<Task, "id">): Promise<Task> {
    const response = await fetch(import.meta.env.VITE_API_URL_TASKS, {
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
      `${import.meta.env.VITE_API_URL_TASKS}/${id}`,
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
    await fetch(`${import.meta.env.VITE_API_URL_TASKS}/${id}`, {
      method: "DELETE",
    });
  },
};

export const projectService = {
  async fetchProject(): Promise<Projects[]> {
    const response = await fetch(import.meta.env.VITE_API_URL_PROJECT);
    const data: Projects[] = await response.json();
    return data;
  },

  async createProject(attributes: Omit<Projects, "id">): Promise<Projects> {
    const response = await fetch(import.meta.env.VITE_API_URL_PROJECT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    const newProject: Projects = await response.json();
    return newProject;
  },

  async deleteProject(id: string): Promise<void> {
    await fetch(`${import.meta.env.VITE_API_URL_PROJECT}/${id}`, {
      method: "DELETE",
    });
  },
};

export const ecommerceService = {
  async fetchEcommerce(): Promise<Ecommerce[]> {
    const response = await fetch(import.meta.env.VITE_API_URL_ECOMMERCE);
    const data: Ecommerce[] = await response.json();
    return data;
  },

  async createEcommerce(attributes: Omit<Ecommerce, "id">): Promise<Ecommerce> {
    const response = await fetch(import.meta.env.VITE_API_URL_ECOMMERCE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    const newEcommerce: Ecommerce = await response.json();
    return newEcommerce;
  },

  async deleteEcommerce(id: string): Promise<void> {
    await fetch(`${import.meta.env.VITE_API_URL_ECOMMERCE}/${id}`, {
      method: "DELETE",
    });
  },
};

export const categoryService = {
  async fetchCategory(): Promise<Category[]> {
    const response = await fetch(import.meta.env.VITE_API_URL_CATEGORY);
    const data: Category[] = await response.json();
    return data;
  },

  async createCategory(attributes: Omit<Category, "id">): Promise<Category> {
    const response = await fetch(import.meta.env.VITE_API_URL_CATEGORY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    const newCategory: Category = await response.json();
    return newCategory;
  },

  async deleteCategory(id: string): Promise<void> {
    await fetch(`${import.meta.env.VITE_API_URL_CATEGORY}/${id}`, {
      method: "DELETE",
    });
  },
};
