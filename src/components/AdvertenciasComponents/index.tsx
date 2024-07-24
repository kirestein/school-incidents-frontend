import React from 'react';
import { IAdvertenciasComponentProps } from '../../Interfaces/Interface'
import * as C from './styles';

const AdvertenciasComponents: React.FC<IAdvertenciasComponentProps> = ({ message, name }) => {
  const dado = name;
  const shouldDisplayMessage = (dado === '' || message.includes(dado));
  return (
    <C.Container>
      {shouldDisplayMessage && message}
    </C.Container>
  );
}

export default AdvertenciasComponents;