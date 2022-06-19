import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { StepperContext } from '../../../contexts/stepperContext';

import { register } from '../../../Redux/actions/userAction';
const Finish = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const formData = new FormData();
    formData.set('name', userData.name);
    formData.set('email', userData.email);
    formData.set('password', userData.password);
    console.log(formData);
    dispatch(register(formData));
  }, []);

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-green-500 text-center">
          <h1>Congratulations!</h1>
        </div>
      </div>
    </div>
  );
};

export default Finish;
