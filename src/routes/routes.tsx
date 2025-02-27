import { createBrowserRouter } from "react-router-dom";
import { CompletedTasks } from "../pages/completedTasks";
import { Home } from "../pages/home";
import { Tasks } from "../pages/tasks";
import { TasksByProjects } from "../pages/tasksByProjects";
import { Projects } from "../pages/projects";
import { Wrapper } from "../components/Wrapper";
import { ECommerce } from "../pages/ecommerce";
import { ECommerceCategory } from "../pages/ecommerceCategory";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tarefas",
        element: <Tasks />,
      },
      {
        path: "/tarefas/arquivadas",
        element: <CompletedTasks />,
      },
      {
        path: "/tarefas/projetos",
        element: <TasksByProjects />,
      },
      {
        path: "/tarefas/projetos/:projeto",
        element: <Projects />,
      },
      {
        path: "/e-commerce",
        element: <ECommerce />,
      },
      {
        path: "/e-commerce/categoria/:categoria",
        element: <ECommerceCategory />,
      },
    ],
  },
]);
