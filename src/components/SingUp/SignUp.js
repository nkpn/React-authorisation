import React from 'react';
import useForm from 'service/useForm';
import validate from 'service/validation';
import shortid from 'shortid';
import './SignUp.scss';

const SignUp = ({ submitForm }) => {
  const options = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ];

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <>
      <h1 className="Heading">Sign Up with email</h1>
      <form className="Form" noValidate onSubmit={handleSubmit}>
        <label className="Label">Gender</label>
        <ul className="ListRow">
          {options.map(({ value, label }) => {
            return (
              <li key={shortid()} className="ListItem">
                <label className="GenderLabel">
                  <img
                    src={require('../../images/' + value + '.svg').default}
                    className="ListIcon"
                    alt={label}
                  ></img>
                  <input
                    type="radio"
                    name="gender"
                    value={values.gender} //* Тут было {value}
                    onChange={handleChange}
                    checked={values.gender}
                    className="CustomCheckbox"
                  ></input>
                  {label}
                </label>
              </li>
            );
          })}
        </ul>

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
