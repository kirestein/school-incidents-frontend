import React from 'react';

import * as C from './styles';

interface IFormsComponentProps{
    children: React.ReactNode;
    formTitle: string;
    //criar uma props para receber onsubmit
    onsubmit?: React.FormEventHandler<HTMLFormElement>;

}

const FormsComponent: React.FC<IFormsComponentProps> = ({ children, formTitle, onsubmit }) => {
  return (
    <C.Form onSubmit={onsubmit}>
      <C.Fieldset>
        <C.FormTitle>{ formTitle }</C.FormTitle>
        { children }
      </C.Fieldset>
    </C.Form>
  );
}

export default FormsComponent;