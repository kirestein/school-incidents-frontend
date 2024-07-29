import React from 'react';
import { useMyContext } from '../../context/Context'
import * as I from '../../Interfaces/Interface'
import * as C from './styles';
import Forms from '../FormsComponent';
import Input from '../Input';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignInComponent: React.FC = () => {
  const { signIn, state, dispatch, loading } = useMyContext()
  const navigate = useNavigate();

  const handleSignIn = (e: any) => {
    e.preventDefault();
    const email = state.email;
    const password = state.password;

    if (email !== '' && password !== '') {
      signIn(email, password)
      setTimeout(()=>{
        navigate('/home');
        toast.success(`Bem vindo(a) de volta ${ state.userName }`);
      }, 3000)
      // console.log('user: ', user);
      // console.log('logado: ', signed);
      
    } else {
      alert('Preencha os campos');
    }
  };

  // if (!loadingUser) {
  //   return (
  //     <div>
  //       <Backdrop
  //         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //         open={state.open}
  //       >
  //         <CircularProgress color="inherit" />
  //       </Backdrop>
  //     </div>
  //   );
  // }


  return (
    <C.Container>
      <C.ContentHeader>
        <C.Title>
        Bem vindo(a) ao sistema de gestão de ocorrências da <C.TitleStrong>EMEF Noé Azevedo</C.TitleStrong>
        </C.Title>
      </C.ContentHeader>
      <C.Login>
        <Forms onsubmit={handleSignIn} formTitle='SignIn'>
          <C.Label>
            <C.Span>E-mail</C.Span>
            <Input
              required
              type='text'
              placeholder='Digite seu email'
              value={state.email}
              onChange={e=>{
                dispatch({
                  type: I.ContextActions.setEmail,
                  payload: e.target.value
                })
              }}

            />
          </C.Label>
          <C.Label>
            <C.Span>Senha</C.Span>
            <Input
              required
              type='password'
              placeholder='Digite sua senha'
              value={state.password}
              onChange={e=>{
                dispatch({
                  type: I.ContextActions.setPassword,
                  payload: e.target.value
                })
              }}
            />
          </C.Label>
          <Button type='submit' text={
            loading ? 'Carregando...' : 'Entrar'
          } />
          {/* <button>Entrar</button> */}
        </Forms>
      </C.Login>
    </C.Container>
  );
}

export default SignInComponent;