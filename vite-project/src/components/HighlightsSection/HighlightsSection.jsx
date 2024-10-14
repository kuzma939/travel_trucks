import styles from "./HighlightsSection.module.css";
import BadgesList from "../BadgesList/BadgesList";
import FeaturesList from "../FeaturesList/FeaturesList";
import { useSelector } from "react-redux";
import { selectChosenCamper } from "../../redux/selectors";

const FeaturesSection = () => {
  const camper = useSelector(selectChosenCamper);

  return (
    <section className={styles.features}>
      <BadgesList camper={camper} />
      <div>
        <h4 className={styles.title}>Vehicle Specifications</h4>
        <FeaturesList />
      </div>
    </section>
  );
};

export default FeaturesSection;
