import styles from "./ImageGallery.module.css";
import { v4 as uuidv4 } from "uuid";

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={styles.gallery}>
      {gallery.map((image) => (
        <li key={uuidv4()} className={styles.item}>
          <img src={image.original} alt="Camper view" className={styles.image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
