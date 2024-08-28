import Slider from "react-slick";
import { ICar } from "../types/car.interface";
import { CarCard } from "./CarCard";
import { useCars } from "../hooks/useCars";
import { getSliderSettings } from "../utils/setings";

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
