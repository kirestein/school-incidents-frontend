import React from 'react';
import * as C from './styles';
import { IInputProps } from '../../Interfaces/Interface';



const Input: React.FC<IInputProps> = ({
    name,
    setName,
    type = 'text'
}) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ((e) => {
        // No longer need to cast to any - hooray for react!
        setName(e.target.value);
    })
  return (
    <C.Container>
        <C.InputContainer 
            type={type} 
            placeholder='Pesquisar por aluno' 
            onChange={ handleChange }
            value={ name }
        />
    </C.Container>
  );
}

export default Input;