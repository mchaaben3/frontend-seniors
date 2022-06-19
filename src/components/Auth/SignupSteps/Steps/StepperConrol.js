import React from 'react';
import { Button } from '../../../Styles/Signin.styled';

const StepperConrol = ({ currentStep, steps, handleClick }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        onClick={() => handleClick('prev')}
        className={`
         w-1/3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50

        ${currentStep === 1 ? 'opacity-0' : ''}`}
      >
        Back
      </button>
      <Button onClick={() => handleClick('next')}>
        {currentStep === steps.length ? 'Finish' : 'Next'}
      </Button>
    </div>
  );
};

export default StepperConrol;
