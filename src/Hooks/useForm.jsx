import { useState } from "react";
const useForm = () => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (event, callback) => {
    event.preventDefault();

    callback();
  };
  const handleValuesChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  };

  return [
    formValues,
    handleSubmit,
    handleValuesChange
  ];
};

export default useForm;
