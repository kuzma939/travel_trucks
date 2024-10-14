//import sprite from "../../images/sprite.svg";

import { getFirstLetter } from "../../utils/utils";
import css from "./ReviewItem.module.css";

import { v4 as uuidv4 } from "uuid";

const ReviewItem = ({ review }) => {
  const { reviewer_name: name, reviewer_rating: rating, comment } = review;

  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.letter}>{getFirstLetter(name)}</div>
        <div className={css.nameWrapper}>
          <p>{name}</p>
          <div>
            {[1, 2, 3, 4, 5].map((_, index) => {
              return (
                <svg
                  className={index < rating ? css.yellow : css.gray}
                  key={uuidv4()}
                >
                  <use href={`#icon-star`} />
                </svg>
              );
            })}
          </div>
        </div>
      </div>

      <p className={css.comment}>{comment}</p>
    </div>
  );
};

export default ReviewItem;