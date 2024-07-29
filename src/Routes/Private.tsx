import React from 'react';
import { IChildrenProps } from '../Interfaces/Interface';
import { Navigate } from "react-router-dom";
import { useMyContext } from "../context/Context";

// import { Container } from './styles';

const Private: React.FC<IChildrenProps> = ({ children }) => {
  const { signed } = useMyContext();
  
  return (
    <>
    {
      signed ? children : <Navigate to="/" />
    }
    </>
  );
}

export default Private;