import React from 'react';

import * as C from './styles';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <C.Container>
      <h1>SignIn</h1>
      <h1><Link to='/ocorrencias' /></h1>
    </C.Container>
  );
}

export default SignIn;