import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    gender: '',
    email: '',
    password1: '',
    password2: '',
  });

  //* Variant 2
  //   const [gender, setGender] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password1, setPassword1] = useState('');
  //   const [password2, setPassword2] = useState('');

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'gender':
  //         return setGender(value);
  //       case 'email':
  //         return setEmail(value);
  //       case 'password1':
  //         return setPassword1(value);
  //       case 'password2':
  //         return setPassword2(value);
  //       default:
  //         return;
  //     }
  //   };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, errors, values };
};

export default useForm;
