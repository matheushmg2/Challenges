import { ReactNode, createContext, useReducer, useState } from "react";
import { FilterContext, FilterType } from "../types/filter.interface";

interface ProviderProps {
  children: ReactNode;
}


export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [type, setType] = useState(FilterType.all);

  return (
    <FilterContext.Provider
      value={{
        type,
        setType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
