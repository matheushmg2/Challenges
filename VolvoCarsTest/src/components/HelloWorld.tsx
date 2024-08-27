import React from "react";
import { Block, Button, Flex, Text } from "vcc-ui";
import { CarCard } from "./CarCard";
import { ICar } from "../types/car.interface";
import { useCars } from "../hooks/useCars";
import s from "../../public/css/home.module.css";
import { Spacer } from "./Spacer";

export const HelloWorld = () => {
  const { cars } = useCars();

  return (
    <div className={s.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={s.cardsWrapper}>
        {cars.map((car: ICar) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};
