import React from 'react';
import * as C from './styles';
import { IOcorrenciasComponentProps } from '../../Interfaces/Interface';

const OcorrenciasComponents: React.FC<IOcorrenciasComponentProps> = ({
  message,
  name,
  data,
}) => {
  const dado = name ? name : data;
  console.log(dado);
  
  const shouldDisplayMessage = (dado !== '' ?? message.includes(dado));
  console.log(shouldDisplayMessage);
  return (
    <C.Container>
      { shouldDisplayMessage && dado }
    </C.Container>
  );
  
}

export default OcorrenciasComponents;