import {
  Block,
  Card,
  CardContent,
  Flex,
  Link,
  Row,
  Spacer,
  Text,
} from "vcc-ui";
import { ICar } from "../types/car.interface";
import Image from "next/image";
import s from "../../public/css/components/carCard.module.css";

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
        <Text variant={"bates"} subStyle={"inline-link"} extend={{ margin: 0 }}>
          {modelType}
        </Text>
      </Flex>

      <Spacer />
      <Image src={imageUrl} alt={modelName} width={250} height={200} />
      <Spacer />
      <Flex
        extend={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Link href="https://www.volvocars.com/" arrow="right">
          SHOP
        </Link>
        <Link href="https://www.volvocars.com/" arrow="right">
          LEARN
        </Link>
      </Flex>
    </div>
  );
};
