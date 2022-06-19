import React, { useEffect, useRef, useState } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlighted: true,
          selected: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlighted: false,
          selected: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          completed: false,
          highlighted: false,
          selected: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    //create object
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'w-full flex items-center'
            : 'flex items-center'
        }
      >
        <div className=" flex flex-col items-center text-white">
          <div
            className={`rounded-full transition duration-500 ease-in-out 
          h-12 w-12  flex justify-center items-center border-2 border-black-500 py-3 ${
            step.selected
              ? 'bg-indigo-600 text-white font-bold border border-indigo-500'
              : ''
          }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-800' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? 'border-indigo-600' : ''
          }`}
        ></div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
