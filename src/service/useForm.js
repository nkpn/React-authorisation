import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    gender: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    console.log('values:', values);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log('Well done!');
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      alert(
        `Your gender is ${values.gender}, your email is ${values.email}, and your passowrd is ${values.password1}`,
      );
    }
  }, [errors, callback, isSubmitting]);

  return { handleChange, handleSubmit, errors, values };
};

export default useForm;
