import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ReservationForm.module.css";
import Button from "../Button/Button";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

// Validation Schema
const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email("Enter a valid email").required("Email is mandatory"),
  bookingDate: Yup.date().required("Please choose a booking date"),
  comment: Yup.string(),
});

// Custom DatePicker component for Formik
const CustomDatePicker = ({ field, form }) => {
  const currentDate = new Date();
  return (
    <DatePicker
      {...field}
      selected={field.value ? new Date(field.value) : null}
      onChange={(date) => form.setFieldValue(field.name, date)}
      dateFormat="MMMM d, yyyy"
      minDate={currentDate}
      placeholderText="Select a date"
      className={styles.inputField}
    />
  );
};

const BookingForm = () => {
  const onFormSubmit = (values, actions) => {
    try {
      console.log(values);
      toast.success("Your booking has been submitted!");
      actions.resetForm();
    } catch {
      toast.error("Failed to submit booking");
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      {() => (
        <Form className={styles.formContainer}>
          <div className={styles.fieldWrapper}>
            <Field
              name="name"
              type="text"
              placeholder="Full Name"
              className={styles.inputField}
            />
            <ErrorMessage name="name" component="div" className={styles.errorText} />
          </div>
          <div className={styles.fieldWrapper}>
            <Field
              name="email"
              type="email"
              placeholder="Email Address"
              className={styles.inputField}
            />
            <ErrorMessage name="email" component="div" className={styles.errorText} />
          </div>
          <div className={styles.fieldWrapper}>
            <Field name="bookingDate" component={CustomDatePicker} />
            <ErrorMessage name="bookingDate" component="div" className={styles.errorText} />
          </div>
          <div className={styles.fieldWrapper}>
            <Field
              as="textarea"
              name="comment"
              placeholder="Additional Notes"
              className={`${styles.inputField} ${styles.textarea}`}
            />
          </div>
          <Button text="Submit" classCss="alignCenter" />
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
