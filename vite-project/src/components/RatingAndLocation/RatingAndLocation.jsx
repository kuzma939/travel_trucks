//import icons from "../../images/sprite.svg";
import styles from "./RatingAndLocation.module.css";

const CampersRatingAndLocation = ({ camper }) => {
  return (
    <div className={styles.container}>
      <svg className={styles.icon}>
        <use href={`#icon-star`} />
      </svg>
      <span className={styles.rating}>{`${camper.rating} (${camper.reviews.length} Reviews)`}</span>
      <svg className={styles.icon}>
        <use href={`#icon-map`} />
      </svg>
      <span className={styles.location}>{camper.location}</span>
    </div>
  );
};

export default CampersRatingAndLocation;
