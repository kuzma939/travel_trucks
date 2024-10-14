import clsx from "clsx/lite";
import styles from "./Button.module.css";

const Button = ({ text, onClick, classCss, isDisabled = false }) => {
  const buttonClasses = clsx(styles.button, classCss && styles[classCss]);

  return (
    <button className={buttonClasses} onClick={onClick} type="submit" disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
