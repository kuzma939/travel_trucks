import { Link } from "react-router-dom";
//import icons from "../../images/sprite.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <svg className={styles.logoIcon}>
        <use href={`#icon-logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
