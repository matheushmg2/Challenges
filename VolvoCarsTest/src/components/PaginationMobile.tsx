import { IconButton } from "vcc-ui";
import s from "../../public/css/components/paginationDesktop.module.css";
interface IPaginationDesktop {
  onClickLeft: () => void;
  onClickRight: () => void;
}

export const PaginationMobile = ({
  onClickLeft,
  onClickRight,
}: IPaginationDesktop) => {
  return (
    <div className={s.btnWrapper}>
      <IconButton
      variant="outline"
        onClick={onClickLeft}
        aria-label="esquerda"
        iconName="navigation-chevronback"
      />

      <IconButton
      variant="outline"
        onClick={onClickRight}
        aria-label="direita"
        iconName="navigation-chevronforward"
      />
    </div>
  );
};
