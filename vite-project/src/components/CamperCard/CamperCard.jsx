import styles from "./CamperCard.module.css";
import CampersRatingAndLocation from "../RatingAndLocation/RatingAndLocation";
import BadgesList from "../BadgesList/BadgesList";
import FavoriteButton from "../LikeButton/LikeButton";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../redux/slice";
import { selectFavorites } from "../../redux/selectors";

const CampersItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const toggleFavorite = () => {
    dispatch(setFavorite(camper));
  };

  const isFavorited = favorites.some(
    (fav) => fav.id === camper.id && fav.name === camper.name
  );

  return (
    <div className={styles.camperCard}>
      <img className={styles.image} src={camper.gallery[0].original} alt={camper.name} />
      <div className={styles.details}>
        <div className={styles.header}>
          <h3 className={styles.name}>{camper.name}</h3>
          <div className={styles.priceAndFav}>
            <p className={styles.price}>€{camper.price.toFixed(2)}</p>
            <FavoriteButton onClick={toggleFavorite} isFavorite={isFavorited} />
          </div>
        </div>
        <CampersRatingAndLocation camper={camper} />
        <p className={styles.description}>{camper.description}</p>
        <BadgesList camper={camper} />
      </div>
    </div>
  );
};

export default CampersItem;
