import React from 'react';
import * as C from './styles';
import * as I from '../../Interfaces/Interface'
import Form from '../FormsComponent';
import Input from '../Input';
import Button from '../Button';

// import ModalComponent from '../ModalComponent';
import { useMyContext } from '../../context/Context';

const Register: React.FC = () => {
  const context = useMyContext();

  const handleSignUp = async(e: any) => {
    e.preventDefault();
    const email = context.state.email;
    const password = context.state.password;
    const userName = context.state.userName;
    context.signUp(email, password, userName);
  }

  return (
    
        <C.Container>
          <C.Login>
            <Form onsubmit={handleSignUp} formTitle='SignUp'>
                  <Input
                    type='text'
                    placeholder='Digite seu nome'
                    value={context.state.userName ? context.state.userName : ''}
                    onChange={e=>{
                      context.dispatch({
                        type: I.ContextActions.setUserName,
                        payload: e.target.value
                      })
                    }}

                  />
                  <Input
                    type='text'
                    placeholder='Digite seu email'
                    value={context.state.email}
                    onChange={e=>{
                      context.dispatch({
                        type: I.ContextActions.setEmail,
                        payload: e.target.value
                      })
                    }}

                  />
                  <Input
                    type='password'
                    placeholder='Digite sua senha'
                    value={context.state.password}
                    onChange={e=>{
                      context.dispatch({
                        type: I.ContextActions.setPassword,
                        payload: e.target.value
                      })
                    }}
                  />
                  <Button type='submit' text={ context.loading ? 'Carregando...' : 'Cadastrar' } />
                </Form>
          </C.Login>
        </C.Container>
  );
}

export default Register;