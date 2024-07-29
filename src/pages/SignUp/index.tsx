import React from 'react';
import Register from '../../components/Register';

import * as C from './styles';
import HeaderComponent from '../../components/HeaderComponent';

const SignUp: React.FC = () => {
  return (
    <C.Container>
      <HeaderComponent title="Regitre novo usuário" linecolor="#F7931B"/>
      <Register />
    </C.Container>
  );
}

export default SignUp;