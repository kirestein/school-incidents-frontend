import React from 'react';

import * as C from './styles';
import Cards from './Cards';

const Dashboard: React.FC = () => {
  return (
    <C.Container>
      <Cards />        
    </C.Container>
  );
}

export default Dashboard;