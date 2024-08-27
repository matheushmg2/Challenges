import s from "../../public/css/components/spacer.module.css";

interface ISpacer {
  height: string
}

export const Spacer = ({height}: ISpacer) => {
  return <div className={s.spacer} style={{height: `${height}`}}></div>;
};
