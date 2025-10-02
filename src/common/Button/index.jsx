import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Button = ({
  btnTitle,
  btnIcon,
  bgColor,
  btnTitle2,
  disabled,
  iconColor,
  type,
  onClick,
  link,
  textColor,
}) => {
  return (
    <>
      {link ? (
        <button
          disabled={disabled}
          onClick={!disabled ? onClick : undefined}
          type={type ? type : "button"}
          className={`${styles.btnWrapper} btn d-flex align-items-center justify-content-center text-center gap-2 `}
          style={{ backgroundColor: bgColor, color: textColor, cursor: "pointer" }}
        >
          {btnTitle ? <a href={link} target="blank">
            <p className="m-0">{btnTitle}</p>
          </a> : ""}
          <DynamicIcon name={btnIcon} color={iconColor} size={18} />
          {btnTitle2 ? <a href={link} target="blank">
            <p className="m-0">{btnTitle2}</p>
          </a> : ""}
        </button>
      ) : <button
        disabled={disabled}
        onClick={!disabled ? onClick : undefined}
        type={type ? type : "button"}
        className={`${styles.btnWrapper} btn d-flex align-items-center justify-content-center text-center gap-2 `}
        style={{ backgroundColor: bgColor, color: textColor, cursor: "pointer" }}
      >
        {btnTitle ? <h6>{btnTitle}</h6> : ""}
        <DynamicIcon name={btnIcon} color={iconColor} size={18} />
        {btnTitle2 ? <h6>{btnTitle2}</h6> : ""}
      </button>}
    </>
  );
};

export default Button;
