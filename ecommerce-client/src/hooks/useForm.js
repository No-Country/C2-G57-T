import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleInputCheckbox = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.checked,
    });
  };

  return { values, handleInputChange, reset, handleInputCheckbox };
};
