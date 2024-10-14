//import sprite from "../../images/sprite.svg";
import { Formik, Form, Field } from "formik";
import css from "./SearchPanel.module.css";
import Button from "../Button/Button";
import { useSearchParams } from "react-router-dom";
import {
  equipmentName,
  equipmentOptions,
  vehicleTypeOptions,
} from "../../constants";
import { toCamelCase } from "../../utils/utils";
import { useSelector } from "react-redux";
import { searchParamsNames } from "../../constants/index";
import { selectIsButtonDisabled } from "../../redux/selectors";
import { areEqual } from "../../utils/utils";
import { capitalizeFirst } from "../../utils/utils";

const SearchPanel = ({ onSearch }) => {
  const isDisabled = useSelector(selectIsButtonDisabled);

  // Handle form submission
  const [params, setParams] = useSearchParams();
  const paramObject = {};

  searchParamsNames.forEach((item) => {
    paramObject[item] = params.get(item);
  });

  // Functions to get initial values for form

  const getInitialEquipment = () => {
    const initialArray = [];
    for (let key in paramObject) {
      if (key === "transmission") {
        initialArray.push(capitalizeFirst(paramObject[key]));
      }
      if (paramObject[key]) {
        initialArray.push(capitalizeFirst(key));
      }
    }
    return initialArray;
  };

  const getInitialVehicleType = () => {
    let initialValue = "";

    if (paramObject.form) {
      initialValue = capitalizeFirst(paramObject.form);
    }

    return initialValue;
  };

  // Initial form values
  const initialValues = {
    equipment: getInitialEquipment(),
    vehicleType: getInitialVehicleType()
      .replace(/([A-Z])/g, " $1")
      .trim(),
    locationName: paramObject.location || "",
  };

  const handleSubmit = (values) => {
    const { equipment, vehicleType, locationName } = values;

    searchParamsNames.forEach((item) => params.delete(item));

    equipment.forEach((item) => {
      switch (item) {
        case equipmentName.AC:
          params.set(equipmentName.AC, true);
          break;
        case equipmentName.TV:
          params.set(equipmentName.TV, true);
          break;
        case equipmentName.Bathroom:
          params.set(equipmentName.Bathroom.toLowerCase(), true);
          break;
        case equipmentName.Kitchen:
          params.set(equipmentName.Kitchen.toLowerCase(), true);
          break;
        case equipmentName.Automatic:
          params.set("transmission", equipmentName.Automatic.toLowerCase());
          break;
        case equipmentName.Radio:
          params.set(equipmentName.Radio.toLowerCase(), true);
          break;
        case equipmentName.Refrigerator:
          params.set(equipmentName.Refrigerator.toLowerCase(), true);
          break;
        case equipmentName.Microwave:
          params.set(equipmentName.Microwave.toLowerCase(), true);
          break;
        default:
          break;
      }
    });

    if (vehicleType.trim() !== "") {
      params.set("form", toCamelCase(vehicleType));
    }

    if (locationName.trim() !== "") {
      params.set("location", locationName);
    }

    const newParamsObject = {};
    searchParamsNames.forEach((item) => {
      newParamsObject[item] = params.get(item);
    });

    setParams(params);
    if (areEqual(paramObject, newParamsObject)) return;

    onSearch();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        {/* Location */}
        <h5 className={css.locationTitle}>Location</h5>
        <div className={css.locationWrapper}>
          <Field
            className={css.locationInput}
            name="locationName"
            id="locationName"
            placeholder="City"
          />
          <svg height={20} width={20} className={css.locationIcon}>
            <use href={`#icon-map`} />
          </svg>
        </div>

        {/* Filters Section */}
        <h4 className={css.filtersTitle}>Filters</h4>

        {/* Vehicle Equipment (Checkboxes) */}
        <div className={css.equipments}>
          <h5 className={css.filterName}>Vehicle equipment</h5>
          <div className={css.equipmentOptions}>
            {equipmentOptions.map((option) => (
              <div key={option}>
                <Field
                  // className={css.input}
                  type="checkbox"
                  name="equipment"
                  value={option}
                  id={option}
                  className={css.input}
                />
                <label className={css.label} htmlFor={option}>
                  <svg height={20} width={20}>
                    <use
                      href={`#icon-${option
                        .toLowerCase()
                        .replaceAll(" ", "")}`}
                    />
                  </svg>
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Type (Radio buttons) */}
        <div className={css.types}>
          <h5 className={css.filterName}>Vehicle type</h5>
          <div className={css.typeOptions}>
            {vehicleTypeOptions.map((option) => (
              <div key={option}>
                <Field
                  type="radio"
                  name="vehicleType"
                  value={option}
                  className={css.input}
                  id={toCamelCase(option)}
                />
                <label className={css.label} htmlFor={toCamelCase(option)}>
                  <svg height={20} width={20}>
                    <use
                      href={`#icon-${option
                        .toLowerCase()
                        .replaceAll(" ", "")}`}
                    />
                  </svg>
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <Button text="Search" isDisabled={isDisabled} />
      </Form>
    </Formik>
  );
};
export default SearchPanel;