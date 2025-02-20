import { useContext } from "react";
import { ProjectContext } from "../contexts/projectContext";

export const useProject = () => {
  return useContext(ProjectContext);
};
