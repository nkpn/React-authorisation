import React, { useState } from 'react';
import './Form.scss';
import SignUp from 'components/SingUp/SignUp';
import logo from '../../images/logo.svg';
import SuccessForm from 'components/SuccessForm';
import { ToastContainer } from 'react-toastify';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="FormContainer">
        <img src={logo} alt="logo" className="Logo"></img>
        <SignUp submitForm={submitForm} />
        {/* {!isSubmitted ? <SignUp submitForm={submitForm} /> : <SuccessForm />} */}
        <ToastContainer />
      </div>
    </>
  );
};

export default Form;
