import React from 'react';
import { IChildrenProps } from '../Interfaces/Interface';

// import { Container } from './styles';

const Private: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <>
      { children }
    </>
  );
}

export default Private;