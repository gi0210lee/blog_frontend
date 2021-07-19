import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, changeField } from '../../modules/auth';
import AuthForm from './AuthForm';

// 24.2 979

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.register }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('register'), [dispatch]);
  });

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;