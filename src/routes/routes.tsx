import { createBrowserRouter } from "react-router-dom";
import { CompletedTasks } from "../pages/completedTasks";
import { Home } from "../pages/home";
import { Tasks } from "../pages/tasks";
import { TasksByProjects } from "../pages/tasksByProjects";
import { Projects } from "../pages/projects";
import { Wrapper } from "../components/Wrapper";

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
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "/completed-tasks",
        element: <CompletedTasks />,
      },
      {
        path: "/tasks-by-projects",
        element: <TasksByProjects />,
      },
      {
        path: "/projects/:projeto",
        element: <Projects />,
      },
    ],
  },
]);
