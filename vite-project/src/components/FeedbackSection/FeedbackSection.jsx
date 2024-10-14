import css from "./FeedbackSection.module.css";

import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { selectChosenCamper } from "../../redux/selectors";
import ReviewItem from "../ReviewItem/ReviewItem";

const FeedbackSection = () => {
  const camper = useSelector(selectChosenCamper);

  return (
    <section>
      <ul className={css.list}>
        {camper.reviews.map((item) => {
          return (
            <li className={css.item} key={uuidv4()}>
              <ReviewItem review={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FeedbackSection;