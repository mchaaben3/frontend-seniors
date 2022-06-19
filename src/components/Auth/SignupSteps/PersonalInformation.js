import React, { useContext } from 'react';
import { StepperContext } from '../../../contexts/stepperContext';
import { Input } from '../../Styles/Signin.styled';
const PersonalInformation = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-100 my-2">
          Name
        </label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Please put your full Name here"
          onChange={handleChange}
          value={userData['name'] || ''}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-100  my-2">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Please put your Email here"
          onChange={handleChange}
          value={userData['email'] || ''}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
