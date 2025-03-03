import { useContext } from "react";
import { CategoryContext } from "../contexts/categoryContext";

export const useCategory = () => {
  return useContext(CategoryContext);
};
