import {
  Block,
  Card,
  CardContent,
  Flex,
  Link,
  Row,
  Text,
} from "vcc-ui";
import { ICar } from "../types/car.interface";
import Image from "next/image";
import s from "../../public/css/components/carCard.module.css";
import { Spacer } from "./Spacer";

interface CardProps {
  car: ICar;
}

export const CarCard = ({ car }: CardProps) => {
  const { id, modelName, bodyType, modelType, imageUrl } = car;

  return (
    <div className={s.cardWrapper}>
      <Text variant={"bates"} subStyle={"emphasis"}>
        {bodyType}
      </Text>
      <Flex
        extend={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          margin: 0,
        }}
      >
        <Text variant={"amundsen"} extend={{ margin: 0, padding: 0 }}>
          {modelName}
        </Text>
        <Text variant={"bates"}  extend={{ margin: "0 0 0 4px" }}>
          {modelType}
        </Text>
      </Flex>

      <Spacer height="16px" />
      <Image src={imageUrl} alt={modelName} width={250} height={200} />
      <Spacer height="12px" />
      <Flex
        extend={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Link className={s.link} href="https://www.volvocars.com/" arrow="right">
          LEARN
        </Link>
        <Link  href="https://www.volvocars.com/" arrow="right">
          SHOP
        </Link>
        
      </Flex>
    </div>
  );
};
