import React, { useContext } from 'react';
import { StepperContext } from '../../../contexts/stepperContext';
import { Input } from '../../Styles/Signin.styled';
const Password = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-100 my-2">
          Password
        </label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Please choose Strong password"
          onChange={handleChange}
          value={userData['password'] || ''}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="re-password" className="text-gray-100  my-2">
          Retype Password
        </label>
        <Input
          type="password"
          name="repassword"
          id="repassword"
          placeholder="Please put your Email here"
        />
      </div>
    </div>
  );
};

export default Password;
