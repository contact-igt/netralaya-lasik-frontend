import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Button = ({
  btnTitle,
  btnIcon,
  bgColor,
  btnTitle2,
  iconColor,
  type,
  onClick,
  textColor,
}) => {
  return (
    <button
    onClick={onClick}
      type={type ? type : "button"}
      className={`${styles.btnWrapper} btn d-flex align-items-center justify-content-center text-center gap-2 `}
      style={{ backgroundColor: bgColor, color: textColor, cursor: "pointer" }}
    >
      {btnTitle ? <h6>{btnTitle}</h6> : ""}
      <DynamicIcon name={btnIcon} color={iconColor} size={18} />
      {btnTitle2 ? <h6>{btnTitle2}</h6> : ""}
    </button>
  );
};

export default Button;
