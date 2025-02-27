import { useContext } from "react";
import { EcommerceContext } from "../contexts/ecommerceContext";

export const useEcommerce = () => {
  return useContext(EcommerceContext);
};
