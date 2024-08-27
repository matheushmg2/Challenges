import React from "react";
import { Text } from "vcc-ui";
import { CarCard } from "./CarCard";
import { ICar } from "../types/car.interface";
import { useCars } from "../hooks/useCars";
import s from "../../public/css/home.module.css";
import { Spacer } from "./Spacer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrow } from "./CustomArrow";

export const HomeComponent = () => {
  const { cars } = useCars();

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    prevArrow: <CustomArrow position="left" />,
    nextArrow: <CustomArrow position="right" />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={s.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer height="24px" />
      <div className={s.cardsWrapper} id="card-list">
        <Slider {...settings}>
          {cars.map((car: ICar) => (
            <CarCard key={car.id} car={car} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
