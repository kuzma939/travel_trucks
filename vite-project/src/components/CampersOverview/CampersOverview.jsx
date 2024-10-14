import { useSelector } from "react-redux";
import css from "./CampersOverview.module.css";
import { selectAllCampers } from "../../redux/selectors";
import CampersCard from "../CampersCard/CampersCard";

const CampersOverview = () => {
  const campers = useSelector(selectAllCampers);
  return (
    <ul className={css.list}>
      {campers.map((camper) => {
        return (
          <li key={camper.id} className={css.item}>
            {<CampersCard camper={camper} />}
          </li>
        );
      })}
    </ul>
  );
};

export default CampersOverview;