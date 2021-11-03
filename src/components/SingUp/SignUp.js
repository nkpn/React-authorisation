import React from 'react';
import useForm from 'service/useForm';
import validate from 'service/validation';
import maleImage from './images/male.svg';
import femaleImage from './images/female.svg';
import otherImage from './images/other.svg';
import './SignUp.scss';

const SignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <>
      <h1 className="Heading">Sign Up with email</h1>
      <form className="Form" noValidate onSubmit={handleSubmit}>
        <label className="Label">Gender</label>

        <div className="ListRow">
          <label
            className="GenderLabel"
            style={{
              borderColor: !values.gender
                ? 'grey'
                : values.gender === 'male'
                ? 'green'
                : 'grey',
            }}
          >
            <img src={maleImage} alt="Male" className="ImageGender"></img>
            Male
            <input
              className="GenderInput"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            ></input>
          </label>
          <label
            className="GenderLabel"
            style={{
              borderColor: !values.gender
                ? 'grey'
                : values.gender === 'female'
                ? 'green'
                : 'grey',
            }}
          >
            <img src={femaleImage} alt="female" className="ImageGender"></img>
            Female
            <input
              className="GenderInput"
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            ></input>
          </label>

          <label
            className="GenderLabel"
            style={{
              borderColor: !values.gender
                ? 'grey'
                : values.gender === 'other'
                ? 'green'
                : 'grey',
            }}
          >
            <img src={otherImage} alt="Other" className="ImageGender"></img>
            Other
            <input
              className="GenderInput"
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            ></input>
          </label>
        </div>
        {errors.gender && <p>{errors.gender}</p>}

        <label className="Label">E-mail</label>
        <input
          style={{
            borderColor: !values.email
              ? 'grey'
              : !errors.email
              ? 'green'
              : 'red',
          }}
          className="Input"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        ></input>
        {errors.email && <p>{errors.email}</p>}

        <label className="Label">Create Password</label>

        <input
          style={{
            borderColor: !values.password1
              ? 'grey'
              : !errors.password1
              ? 'green'
              : 'red',
          }}
          required
          className="Input"
          type="password"
          name="password1"
          value={values.password1}
          onChange={handleChange}
          placeholder="Enter your password"
        ></input>
        {errors.password1 && <p>{errors.password1}</p>}

        <label className="Label">Confirm Password</label>
        <input
          style={{
            borderColor: !values.password2
              ? 'grey'
              : !errors.password2
              ? 'green'
              : 'red',
          }}
          required
          className="Input"
          type="password"
          name="password2"
          value={values.password2}
          onChange={handleChange}
          placeholder="Confirm your password"
        ></input>
        {errors.password2 && <p>{errors.password2}</p>}

        <button type="submit" className="SignUpBtn">
          Sign Up
        </button>
        <div className="SpanContainer">
          <span className="Span">
            Already have an account?{' '}
            <a className="Link" href="#">
              Login
            </a>
          </span>
          <span className="Span">
            Review privacy and disclosures{' '}
            <a className="Link" href="#">
              here
            </a>
          </span>
        </div>
      </form>
    </>
  );
};

export default SignUp;
