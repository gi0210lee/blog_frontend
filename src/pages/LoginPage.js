import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../components/auth/LoginForm';

function LoginPage(props) {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
