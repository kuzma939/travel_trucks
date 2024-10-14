import styles from "./MoreButton.module.css";

const MoreButton = ({ onClick }) => {
  return (
    <button className={styles.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default MoreButton;
