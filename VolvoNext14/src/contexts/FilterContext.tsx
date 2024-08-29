"use client"
import { FilterContext, FilterType } from "@/types/filter.interface";
import { ReactNode, useState } from "react";

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
