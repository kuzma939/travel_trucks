import styles from "./NotFoundComp.module.css";
//import image from "../../images/errors/error.png";
import clsx from "clsx";

const NotFoundComp = ({ className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <img src={Image} alt="Error" className={styles.errorImage} />
      <p className={styles.errorMessage}>Nothing was found...</p>
    </div>
  );
};

export default NotFoundComp;
