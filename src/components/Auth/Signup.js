import React, { useState } from 'react';
import { StepperContext } from '../../contexts/stepperContext';
import {
  BgContainer,
  Button,
  Container,
  Form,
  FormTitle,
  H1,
  Input,
  InputForm,
  LeftSide,
  MainC,
  WrapperLogin,
} from '../Styles/Signin.styled';
import ContactInformation from './SignupSteps/ContactInformation';
import Finish from './SignupSteps/Finish';
import Password from './SignupSteps/Password';
import PersonalInformation from './SignupSteps/PersonalInformation';
import Stepper from './SignupSteps/Steps/Stepper';
import StepperConrol from './SignupSteps/Steps/StepperConrol';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = ['Personal information', 'Password', 'Finish'];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <Password />;
      case 3:
        return <Finish />;
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === 'next' ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <Container>
      <MainC>
        <BgContainer>
          <LeftSide />
        </BgContainer>
        <div className="md:w-1/2  shadow-xl  p-2 bg-gray-800 lg:w-1/2">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-center text-gray-700 dark:text-white mt-8">
              WELCOME TO SENIORS APP
            </h3>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Sign up to create your account
            </p>
          </div>

          {/* Stepper */}
          <div className="container horizontal mt-4 mb-4">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
          <div className="my-10 p-4">
            <StepperContext.Provider
              value={{
                userData,
                setUserData,
                finalData,
                setFinalData,
              }}
            >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
          {currentStep !== steps.length && (
            <StepperConrol
              currentStep={currentStep}
              handleClick={handleClick}
              steps={steps}
            />
          )}
        </div>
      </MainC>
    </Container>
  );
};

export default Signup;
