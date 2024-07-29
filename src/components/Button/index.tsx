import React from 'react';

import * as C from './styles';

interface IButtonProps{
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({ 
  onClick, 
  text, 
  type='button' }) => {
  return (
    <C.ButtonContainer>
      <C.Button type={type} onClick={onClick}>
        { text }
      </C.Button>
    </C.ButtonContainer>
  );
}

export default Button;