import React from "react";
import { Block, Button, Flex, Text } from "vcc-ui";
import { CarCard } from "./CarCard";
import { ICar } from "../types/car.interface";
import { useCars } from "../hooks/useCars";
import s from "../../public/css/home.module.css";
import { Spacer } from "./Spacer";
import { PaginationDesktop } from "./PaginationDesktop";

export const HomeComponent = () => {
  const { cars } = useCars();

  const onClickLeft = () => {
    let cardList = document.getElementById("card-list");

    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24; // Tamanho do card

    let scrollPosition = cardList?.scrollLeft ?? 0; // Posição atual
    
    if(scrollPosition >= cardSize ) {
      cardList?.scrollTo({ left: scrollPosition - cardSize})
    }

  };
  const onClickRight = () => {
    let cardList = document.getElementById("card-list");
    let scrollSize = cardList?.scrollWidth ?? 0; // Tamanho total da div

    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24; // Tamanho do card

    let scrollPosition = cardList?.scrollLeft ?? 0; // Posição atual
    
    if(scrollPosition + cardSize <= scrollSize ) {
      cardList?.scrollTo({ left: scrollPosition + cardSize})
    }
  };

  return (
    <div className={s.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={s.cardsWrapper} id="card-list">
        {cars.map((car: ICar) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <PaginationDesktop
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
      />
    </div>
  );
};
