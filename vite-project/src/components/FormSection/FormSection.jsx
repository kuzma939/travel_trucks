import BookingForm from "../BookingForm/BookingForm";
import css from "./SectionWithForm.module.css";

const SectionWithForm = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Book your campervan now</p>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <BookingForm />
    </div>
  );
};

export default SectionWithForm;