import { useSelector } from "react-redux";
import styles from "./FeaturesList.module.css";
import { selectChosenCamper } from "../../redux/selectors";
import { capitalizeFirstLetter } from "../../utils/utils";

const FeaturesList = () => {
  const camper = useSelector(selectChosenCamper);

  return (
    <dl className={styles.detailsList}>
      {Object.entries(camper).map(([key, value]) => (
        <div key={key} className={styles.item}>
          <dt>{capitalizeFirstLetter(key)}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default FeaturesList;
