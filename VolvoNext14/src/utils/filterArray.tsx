import { FilterType } from "@/types/filter.interface";


export const filterArray = Object.keys(FilterType).map((key) => ({
  key:
    key === "all"
      ? "Todos os modelos"
      : FilterType[key as keyof typeof FilterType],
  value: FilterType[key as keyof typeof FilterType],
}));
