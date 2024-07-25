import React from 'react';
import { IChildrenProps } from '../../Interfaces/Interface';

import * as C from './styles';
import Content from '../Content';

const LayoutComponent: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <C.Container>
      <C.Content>
        <Content>
          { children }
        </Content>
      </C.Content>
    </C.Container>
  );
}

export default LayoutComponent;