import { createContext, ReactNode, useEffect, useState } from "react";
import { Projects } from "../entities/Projects";
import { projectService } from "../services/api";

export interface ProjectContextData {
  project: Projects[];
  createProject: (attributes: Omit<Projects, "id">) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

export const ProjectContext = createContext({} as ProjectContextData);

interface ProjectContextProviderProps {
  children: ReactNode;
}

export const ProjectContextProvider: React.FC<ProjectContextProviderProps> = ({
  children,
}) => {
  const [project, setProject] = useState<Projects[]>([]);

  useEffect(() => {
    projectService.fetchProject().then((data) => setProject(data));
  }, []);

  const createProject: any = async (attributes: Omit<Projects, "id">) => {
    const newProject = await projectService.createProject(attributes);
    setProject((currentState) => [...currentState, newProject]);
    return attributes;
  };

  const deleteProject = async (id: string) => {
    await projectService.deleteProject(id);
    setProject((currentState) =>
      currentState.filter((project) => project.id !== id)
    );
  };

  return (
    <ProjectContext.Provider value={{ project, createProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
