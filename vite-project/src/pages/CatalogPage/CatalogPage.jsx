import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../services/api";
import CampersOverview from "../../components/CampersOverview/CampersOverview";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import styles from "./CatalogPage.module.css";
import MoreButton from "../../components/MoreButton/MoreButton";
import Loader from "../../components/Loader/Loader";
import { selectIsLoading, selectErrorState, selectShowMore, selectNotFoundState } from '../../redux/selectors';

import { useSearchParams } from "react-router-dom";
import NotFoundComp from "../../components/NotFoundComp/NotFoundComp";
//import ErrorComponent from "../../components/";

const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const showMoreButton = useSelector(selectShowMore);
  const isNotFound = useSelector(selectNotFoundState);
  const hasError = useSelector(selectErrorState);

  const [searchParams] = useSearchParams();
  const filterParams = useMemo(() => {
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);

  useEffect(() => {
    dispatch(getCampers({ page: currentPage, ...filterParams }));
  }, [dispatch, currentPage, filterParams]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.page}>
    <SearchPanel />
      <div className={styles.listWrapper}>
        {!hasError && !isNotFound && <CampersOverview />}
        {showMoreButton && <MoreButton onClick={handleLoadMore} />}
        {loading && <Loader />}
        {isNotFound && !loading && <NotFoundComp />}
     
      </div>
    </div>
  );
};

export default CatalogPage;
