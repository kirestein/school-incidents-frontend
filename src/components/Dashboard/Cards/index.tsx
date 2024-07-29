import React from 'react';
import * as C from './styles';
import CardTop from './CardTop';
// import CardBottom from './CardBottom';
import CardCenter from './CardCenter';

const Cards: React.FC = () => {
  return (
    <C.Container>
        <C.ContentTop>
          <CardTop />
        </C.ContentTop>
        <C.ContentMiddle>
          <CardCenter />
        </C.ContentMiddle>
        {/* <C.ContentBottom>
          <CardBottom />
        </C.ContentBottom> */}
    </C.Container>
  );
}

export default Cards;