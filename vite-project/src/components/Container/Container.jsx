import styles from "./Container.module.css";
//import icons from "../../images/sprite.svg";

const Badge = ({ badgeName }) => {
  const iconId = `#icon-${badgeName.toLowerCase()}`;
  return (
    <div className={styles.wrapper}>
      <svg width="20" height="20">
        <use href={iconId} />
      </svg>
      <span>{badgeName}</span>
    </div>
  );
};

export default Badge;
