import React, { useRef } from 'react';
import { useMyContext } from '../../context/Context';
import * as I from "../../Interfaces/Interface";
import * as C from "./styles";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { PiSealWarningFill } from "react-icons/pi";

const Menu: React.FC = () => {
  const { dispatch } = useMyContext();
  // const weatherRef = useRef<HTMLDivElement>(null)
  const getTempo = async () => {
    // console.log('entrei');
    try {
      // console.log('try');
      const response = await fetch('https://main--incidents-api.netlify.app/.netlify/functions/tempo', {
        mode: 'cors', // Adiciona o modo CORS explicitamente
        headers: {
          // 'Authorization': 'Bearer seu_token_aqui', // Exemplo se precisar de autenticação
          'Content-Type': 'application/json', // Se sua API esperar JSON
        },
      });
      console.log(response);
      const data = await response.json();
      // console.log('data ',data);
      dispatch({ type: I.ContextActions.setTempo, payload: data})
      // console.log('data ',state.ocorrencias);  
      return data;
    } catch(err:any) {
      toast.error(err);
      throw err;
    };
  };

  const { data, isLoading } = useQuery({
    queryKey: ["tempo"],
    queryFn: getTempo,
  })


  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <C.Container>
      <C.Header>
        {/* <LogImg src={Logo} alt="logo" /> */}
        <C.Title>Gestão de Ocorrências</C.Title>
      </C.Header>

      <C.MenuContainer>
        <Link to="/ocorrencias">
          <FaBell />
          Ocorrências
        </Link>
        <Link to="/alunos-advertidos">
          <PiSealWarningFill />
          Alunos Advertidos
        </Link>
      </C.MenuContainer>
      <C.Footer>
        <span>{ data }°C</span>
      </C.Footer>
    </C.Container>
  );
}

export default Menu;