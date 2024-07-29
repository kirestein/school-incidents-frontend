import React from 'react';
import * as C from './styles';
import SignInComponent from '../../components/SignInComponent';

const SignIn: React.FC = () => {
  return (
    <C.Container>
      <SignInComponent />
    </C.Container>
  );
}

export default SignIn;