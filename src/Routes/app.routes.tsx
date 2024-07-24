import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Private from './Private';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Ocorrencias from '../pages/Ocorrencias';
import Advertencias from '../pages/Advertencias';
import LayoutComponent from '../components/LayoutComponent';

const AppRoutes: React.FC = () => {
  return (
    <LayoutComponent>
      <Routes>
      <Route path='/' element={ <SignIn/> } />
      <Route path='/register' Component={ SignUp } />
      <Route path='/home' element={ <Private><Home /></Private> } />
      <Route path='/ocorrencias' element={ <Private><Ocorrencias /></Private> } />
      <Route path='/alunos-advertidos' element={ <Private><Advertencias /></Private> } />
    </Routes>
    </LayoutComponent>
  );
}

export default AppRoutes;