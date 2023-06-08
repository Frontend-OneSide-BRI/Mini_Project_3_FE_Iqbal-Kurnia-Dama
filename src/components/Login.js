import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400' role='alert'>
        <span className='font-medium'></span>This field is required!
      </div>
    );
  }
};

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          navigate("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to='/profile' />;
  }
  

  return (
    <>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Sign in to your account
            </h1>
            <Form className='space-y-4 md:space-y-6' onSubmit={handleLogin} ref={form}>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                  Your email
                </label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5'
                  placeholder='name@gmail.com'
                  required
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required]}
                />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>
                  Password
                </label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-red-400 block w-full p-2.5'
                  required
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>
              <button
                type='submit'
                className='w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                disabled={loading}>
                {loading && (
                  <div
                    className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
                    role='alert'>
                    <span className='font-medium'>Danger alert!</span> Change a few things up and try submitting again.
                  </div>
                )}
                <span>Sign in</span>
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?
                <Link to='/register' className='font-medium text-red-500 hover:underline dark:text-primary-500'>
                  Sign up
                </Link>
              </p>
              {message && (
                <div className='form-group'>
                  <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400' role='alert'>
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
