import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../services/api";
import { selectCamperDetails, selectErrorState, selectIsLoading, selectNotFoundState } from "../../redux/selectors";
import styles from "./CamperDetailsPage.module.css";
import RatingAndLocation from "../../components/RatingAndLocation/RatingAndLocation";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import SectionWithForm from "../../components/SectionWithForm/SectionWithForm";
import HighlightsSection from "../../components/HighlightsSection/HighlightsSection";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";
import ToggleSection from "../../components/ToggleSection/ToggleSection";
import Loader from "../../components/Loader/Loader";
import NotFoundComp from "../../components/NotFoundComp/NotFoundComp";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Toaster } from "react-hot-toast";

const CamperDetailsPage = () => {
  const [isFeatureView, setIsFeatureView] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);
  const isNotFound = useSelector(selectNotFoundState);
  const hasError = useSelector(selectErrorState);

  return (
    <div className={styles.page}>
      {camper && (
        <>
          <h1 className={styles.title}>{camper.name}</h1>
          <RatingAndLocation camper={camper} />
          <h2 className={styles.price}>€{camper.price}.00</h2>
          <ImageGallery gallery={camper.gallery} />
          <p className={styles.description}>{camper.description}</p>
          <ToggleSection isFeatureView={isFeatureView} setIsFeatureView={setIsFeatureView} />
          <div className={styles.sectionContainer}>
            {isFeatureView ? <HighlightsSection /> : <FeedbackSection />}
            <SectionWithForm />
          </div>
        </>
      )}
      {isLoading && <Loader />}
      {isNotFound && <NotFoundComp className="center" />}
      {hasError && <ErrorBoundary className="center" />}
      <Toaster position="top-right" />
    </div>
  );
};

export default CamperDetailsPage;
