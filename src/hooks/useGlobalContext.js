import { globalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export const useGlobalContext = () => {
  return useContext(globalContext);
};
