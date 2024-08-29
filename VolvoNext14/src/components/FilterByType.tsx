"use client"
import { FilterContext, FilterType } from "@/types/filter.interface";
import { filterArray } from "@/utils/filterArray";
import { useContext } from "react";
import s from "@/css/components/filterByType.module.css"

export const FilterByType = () => {
  const { type, setType } = useContext(FilterContext);

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <ul className={s.filterList}>
      {filterArray.map(({ key, value }) => (
        <li
          key={value}
          className={type === value ? s.filterItemActive : s.filterItem}
          onClick={() => handleChangeType(value)}
        >
          {key}
        </li>
      ))}
    </ul>
  );
};
