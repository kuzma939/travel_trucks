import { Link } from "react-router-dom";
import styles from "./LinkRedirect.module.css";

const LinkRedirect = ({ text, to }) => {
  return (
    <Link to={to} className={styles.redirectButton}>
      {text}
    </Link>
  );
};

export default LinkRedirect;
