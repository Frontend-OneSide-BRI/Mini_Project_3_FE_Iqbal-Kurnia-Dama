import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div
        className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        role='alert'>
        <span className='font-medium'></span>This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div
        className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        role='alert'>
        <span className='font-medium'></span>This field is required!
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div
        className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        role='alert'>
        <span className='font-medium'></span>This field is required!
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div
        className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        role='alert'>
        <span className='font-medium'></span>This field is required!
      </div>
    );
  }
};
const vphone = (value) => {
  if (value.length < 3 || value.length > 12) {
    return (
      <div
        className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        role='alert'>
        <span className='font-medium'></span>This field is required!
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, email, password, phone))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Create and account
          </h1>
          <Form className='space-y-4 md:space-y-6' action='#' onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <div>
                  <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900'>
                    Your Name
                  </label>
                  <Input
                    type='text'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5'
                    placeholder='your name'
                    required
                    value={name}
                    onChange={onChangeName}
                    validations={[required, vname]}
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5'
                    placeholder='name@gmail.com'
                    required
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-red-400 block w-full p-2.5'
                    required
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900'>
                    Phone
                  </label>
                  <input
                    type='number'
                    name='phone'
                    id='phone'
                    placeholder='your number phone'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-red-400 block w-full p-2.5'
                    required
                    value={phone}
                    onChange={onChangePhone}
                    validations={[required, vphone]}
                  />
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                  Create an account
                </button>
              </div>
            )}
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
              Already have an account?
              <Link to='/login' className='font-medium text-red-500 hover:underline dark:text-primary-500'>
                Sign hare
              </Link>
            </p>
            {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
