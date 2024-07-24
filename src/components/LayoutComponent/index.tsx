import React from 'react';
import { IChildrenProps } from '../../Interfaces/Interface';

import * as C from './styles';
import Content from '../Content';
import Menu from '../Menu';

const LayoutComponent: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <C.Container>
      <C.Menu>
        <Menu />
      </C.Menu>
      <C.Content>
        <Content>
          { children }
        </Content>
      </C.Content>
    </C.Container>
  );
}

export default LayoutComponent;