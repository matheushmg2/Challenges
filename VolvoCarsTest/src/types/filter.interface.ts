import { createContext } from "react";

export enum FilterType {
    all = "all",
    suv = "suv",
    estate = "estate",
    sedan = "sedan",
}

export const FilterContext = createContext({
    type: FilterType.all,
    setType: (value: FilterType) => {},
});

export interface IFilter {
    type: string,
    setType: (value: FilterType) => {},
}
