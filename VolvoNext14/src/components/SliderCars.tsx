"use client";
import { useCars } from "@/hooks/useCars";
import { ICar } from "@/types/car.interface";
import { getSliderSettings } from "@/utils/setings";
import Slider from "react-slick";
import { CarCard } from "./CarCard";

export const SliderCars = () => {
  const { cars } = useCars();

  const settings = getSliderSettings(cars.length);

  return (
    <Slider {...settings} className={"qntLength" + cars.length}>
      {cars.map((car: ICar) => (
        <CarCard key={car.id} car={car} />
      ))}
    </Slider>
  );
};
