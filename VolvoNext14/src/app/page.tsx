import s from "@/css/page.module.css";
import { Spacer } from "@/components/Spacer";
import { FilterByType } from "@/components/FilterByType";
import { SliderCars } from "@/components/SliderCars";

export default function Home() {
  return (
    <div className={s.homeWrapper}>
      <Spacer height="32px" />
      <p className={s.homeTitle}>Todos os modelos Recharge</p>
      <Spacer height="24px" />
      <FilterByType />
      <Spacer height="24px" />
      <div className={s.cardsWrapper}>
        <SliderCars />
      </div>
    </div>
  );
}
