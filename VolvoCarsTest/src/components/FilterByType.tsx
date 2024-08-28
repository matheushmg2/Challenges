import { useContext } from "react";
import {
  FilterContext,
  FilterType,
} from "../types/filter.interface";
import s from "../../public/css/components/filterByType.module.css";
import { filterArray } from "../utils/filterArray";

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
