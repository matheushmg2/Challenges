import Image from "next/image";
import { Spacer } from "./Spacer";
import { ICar } from "@/types/car.interface";
import s from "@/css/components/carCard.module.css";
import { CustomArrowLink } from "./CustomArrow";

interface CardProps {
  car: ICar;
}

export const CarCard = ({ car }: CardProps) => {
  const { id, modelName, bodyType, modelType, imageUrl } = car;

  return (
    <div className={s.cardWrapper}>
      <p className={s.cardBodyType}>{bodyType}</p>
      <div className={s.cardModel}>
        <p className={s.modelName}>{modelName}</p>
        <p className={s.modelType}>{modelType}</p>
      </div>

      <Spacer height="16px" />
      <Image src={imageUrl} alt={modelName} width={250} height={200} />
      <Spacer height="12px" />
      <div className={s.cardLink}>
        <a href="https://www.volvocars.com/">
          LEARN <CustomArrowLink />
        </a>
        <a href="https://www.volvocars.com/">SHOP <CustomArrowLink /></a>
      </div>
    </div>
  );
};
