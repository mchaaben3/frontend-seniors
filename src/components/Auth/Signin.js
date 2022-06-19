import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/actions/userAction';
import store from '../../Redux/store';

import {
  BgContainer,
  Button,
  Container,
  Form,
  FormTitle,
  H1,
  Illustration,
  Input,
  InputForm,
  LeftSide,
  MainC,
} from '../Styles/Signin.styled';
const Signin = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
  };

  const navigate = useNavigate();
  return (
    <Container>
      <MainC>
        <BgContainer>
          <LeftSide />
        </BgContainer>

        <div className="flex items-center w-1/3 max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                WELCOME TO SENIORS APP
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setemail(e.target.value.toLowerCase())}
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      for="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value.toLowerCase())}
                  />
                </div>

                <div className="mt-6">
                  <Button onClick={handleSubmit}>Sign in</Button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{' '}
                <a
                  href="/signup"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </MainC>
    </Container>
  );
};

export default Signin;
