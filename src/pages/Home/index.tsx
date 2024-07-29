import React from 'react';

import * as C from './styles';
import Dashboard from '../../components/Dashboard';
import HeaderComponent from '../../components/HeaderComponent';

const Home: React.FC = () => {
  
  return (
    <C.Container>
      <C.HeaderContent>
        <HeaderComponent title="Dashboard" linecolor="#F7931B"/>
      </C.HeaderContent>
      <Dashboard />
    </C.Container>
  );
}

export default Home;