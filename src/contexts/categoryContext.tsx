import { createContext, ReactNode, useEffect, useState } from "react";
import { Category } from "../entities/Category";
import { categoryService } from "../services/api";

export interface CategoryContextData {
  category: Category[];
  createCategory: (attributes: Omit<Category, "id">) => Promise<void>;
}

export const CategoryContext = createContext({} as CategoryContextData);

interface CategoryContextProviderProps {
  children: ReactNode;
}

export const CategoryContextProvider: React.FC<
  CategoryContextProviderProps
> = ({ children }) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    categoryService.fetchCategory().then((data) => setCategory(data));
  }, []);

  const createCategory: any = async (attributes: Omit<Category, "id">) => {
    const newCategory = await categoryService.createCategory(attributes);
    setCategory((currentState) => [...currentState, newCategory]);
    return attributes;
  };

  return (
    <CategoryContext.Provider value={{ category, createCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
