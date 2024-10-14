import Badge from "../Container/Container";
import styles from "./ItemsList.module.css";

const BadgesGroup = ({ camper }) => {
  const badges = [
    { condition: camper.transmission === "automatic", label: "Automatic" },
    { condition: camper.engine === "petrol", label: "Petrol" },
    { condition: camper.kitchen, label: "Kitchen" },
    { condition: camper.AC, label: "AC" },
    { condition: camper.TV, label: "TV" },
    { condition: camper.bathroom, label: "Bathroom" },
    { condition: camper.radio, label: "Radio" },
    { condition: camper.refrigerator, label: "Refrigerator" },
    { condition: camper.microwave, label: "Microwave" },
  ];

  return (
    <div className={styles.badgesContainer}>
      {badges
        .filter((badge) => badge.condition)
        .map((badge) => (
          <Badge key={badge.label} badgeName={badge.label} />
        ))}
    </div>
  );
};

export default BadgesGroup;
