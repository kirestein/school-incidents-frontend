import React from 'react';
import { IChildrenProps } from '../../Interfaces/Interface';

import * as C from './styles';

const Content: React.FC<IChildrenProps> = ({ children }) => {
  return <C.Container>{ children }</C.Container>;
}

export default Content;