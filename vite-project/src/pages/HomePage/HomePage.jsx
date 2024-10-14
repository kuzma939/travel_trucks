import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LinkRedirect from "../../components/LinkRedirect/LinkRedirect";
import styles from "./HomePage.module.css";
import { resetCampers } from "../../redux/store";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCampers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Campers of your dreams</h1>
      <p className={styles.text}>You can find everything you want in our catalog</p>
      <LinkRedirect text="View Now" redirectTo="/catalog" />
    </div>
  );
};

export default HomePage;
