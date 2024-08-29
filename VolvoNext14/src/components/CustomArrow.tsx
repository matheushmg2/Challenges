import s from "@/css/page.module.css";

export const CustomArrow = (props: any) => {
  const { onClick, position } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={s["customArrow" + position]}
      onClick={onClick}
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="white"
        stroke="#333"
        strokeWidth="1"
      ></circle>
      <rect
        x="24.9141"
        y="20.3457"
        width="10.4911"
        height="0.5"
        rx="0.25"
        transform="rotate(-135 24.9141 20.3457)"
        fill="none"
        stroke="#333"
        strokeWidth="1"
      ></rect>
      <rect
        x="17.4942"
        y="27.0703"
        width="10.4758"
        height="0.5"
        rx="0.25"
        transform="rotate(-45 17.4942 27.0703)"
        fill="none"
        stroke="#333"
        strokeWidth="1"
      ></rect>
    </svg>
  );
};

export const CustomArrowLink = () => {
  return (
    <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 1.5l4 4-4 4"
        fill="none"
        stroke="#1c6bba"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
