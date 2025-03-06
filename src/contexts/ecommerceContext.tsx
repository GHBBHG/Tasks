import { createContext, ReactNode, useEffect, useState } from "react";
import { Ecommerce } from "../entities/Ecommerce";
import { ecommerceService } from "../services/api";

export interface EcommerceContextData {
  ecommerce: Ecommerce[];
  createEcommerce: (attributes: Omit<Ecommerce, "id">) => Promise<void>;
  deleteEcommerce: (id: number) => Promise<void>;
}

export const EcommerceContext = createContext({} as EcommerceContextData);

interface EcommerceContextProviderProps {
  children: ReactNode;
}

export const EcommerceContextProvider: React.FC<
  EcommerceContextProviderProps
> = ({ children }) => {
  const [ecommerce, setEcommerce] = useState<Ecommerce[]>([]);

  useEffect(() => {
    ecommerceService.fetchEcommerce().then((data) => setEcommerce(data));
  }, []);

  const createEcommerce: any = async (attributes: Omit<Ecommerce, "id">) => {
    const newEcommerce = await ecommerceService.createEcommerce(attributes);
    setEcommerce((currentState) => [...currentState, newEcommerce]);
    return attributes;
  };

  const deleteEcommerce = async (id: number) => {
    await ecommerceService.deleteEcommerce(id);
    setEcommerce((currentState) =>
      currentState.filter((ecommerce) => ecommerce.id !== id)
    );
  };

  return (
    <EcommerceContext.Provider
      value={{ ecommerce, createEcommerce, deleteEcommerce }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
