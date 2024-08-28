import React from "react";
import { Text } from "vcc-ui";
import s from "../../public/css/home.module.css";
import { Spacer } from "./Spacer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FilterContextProvider } from "../contexts/FilterContext";
import { FilterByType } from "./FilterByType";
import { SliderCars } from "./SliderCars";

export const HomeComponent = () => {
  return (
    <FilterContextProvider>
      <div className={s.homeWrapper}>
        <Text variant="cook">Todos os modelos Recharge</Text>
        <Spacer height="24px" />
        <FilterByType />
        <div className={s.cardsWrapper}>
          <SliderCars />
        </div>
      </div>
    </FilterContextProvider>
  );
};
