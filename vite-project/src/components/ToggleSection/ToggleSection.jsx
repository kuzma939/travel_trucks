import clsx from "clsx";
import styles from "./ToggleSection.module.css";

const SectionsToggler = ({ setIsFeaturesVisible, isFeaturesVisible }) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={clsx(styles.toggleButton, isFeaturesVisible && styles.active)}
        onClick={() => setIsFeaturesVisible(true)}
      >
        Features
      </button>
      <button
        className={clsx(styles.toggleButton, !isFeaturesVisible && styles.active)}
        onClick={() => setIsFeaturesVisible(false)}
      >
        Reviews
      </button>
    </div>
  );
};

export default SectionsToggler;
