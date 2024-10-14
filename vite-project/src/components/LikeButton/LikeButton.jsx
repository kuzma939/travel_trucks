//import icons from "../../images/sprite.svg";
import styles from "./LikeButton.module.css";
import clsx from "clsx/lite";

const FavoriteButton = ({ onClick, isFavorite }) => {
  const buttonClass = clsx(styles.icon, isFavorite && styles.active);

  return (
    <button onClick={onClick} className={styles.button}>
      <svg className={buttonClass}>
        <use href={`#icon-heart`} />
      </svg>
    </button>
  );
};

export default FavoriteButton;
