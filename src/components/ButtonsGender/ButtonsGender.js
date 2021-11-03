import React from 'react';
import useForm from 'service/useForm';
import './ButtonsGender.scss';
import maleImage from './images/male.svg';
import femaleImage from './images/female.svg';
import otherImage from './images/other.svg';

const ButtonsGender = () => {
  const { handleChange, values } = useForm();
  return (
    <ul className="ListRow">
      <li>
        <button
          type="button"
          className="Button"
          name="male"
          value={values.gender}
          onClick={handleChange}
        >
          <img src={maleImage} alt="male" className="Icon" />
          Male
        </button>
      </li>
      <li>
        <button
          type="button"
          className="Button"
          value="female"
          onClick={handleChange}
        >
          <img src={femaleImage} alt="male" className="Icon" />
          Female
        </button>
      </li>
      <li>
        <button
          type="button"
          className="Button"
          value="other"
          onClick={handleChange}
        >
          <img src={otherImage} alt="male" className="Icon" />
          Other
        </button>
      </li>
    </ul>
  );
};

export default ButtonsGender;
