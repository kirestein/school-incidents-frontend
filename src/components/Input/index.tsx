import React from 'react';
import * as C from './styles';
import { IInputProps } from '../../Interfaces/Interface';



const Input: React.FC<IInputProps> = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    required,
    accept,
}) => {
  return (
    <C.Container>
        <C.InputContainer 
            type={ type } 
            placeholder={ placeholder } 
            onChange={ onChange }
            value={ value }
            required={ required }
            accept={ accept }

        />
    </C.Container>
  );
}

export default Input;