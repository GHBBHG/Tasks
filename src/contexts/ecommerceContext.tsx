import { createContext, ReactNode, useEffect, useState } from "react";
import { Ecommerce } from "../entities/Ecommerce";
import { ecommerceService } from "../services/api";

export interface EcommerceContextData {
  ecommerce: Ecommerce[];
}

export const EcommerceContext = createContext({} as EcommerceContextData);

interface EcommerceContextProviderProps {
  children: ReactNode;
}

export const EcommerceContextProvider: React.FC<EcommerceContextProviderProps> = ({
  children,
}) => {
  const [ecommerce, setEcommerce] = useState<Ecommerce[]>([]);

  useEffect(() => {
    ecommerceService.fetchEcommerce().then((data) => setEcommerce(data));
  }, []);

  return (
    <EcommerceContext.Provider value={{ ecommerce }}>
      {children}
    </EcommerceContext.Provider>
  );
};
