import React from "react";
import * as C from "./styles";
import { useMyContext } from "../../../../context/Context";

const CardTop: React.FC = () => {
  const { user } = useMyContext();

  return (
    <C.Container>
      <C.Title>
        Bem vindo(a) <C.Strong>{user.nome ? user.nome : ""}</C.Strong>
      </C.Title>
      <C.Text>
        Aqui, você pode facilmente visualizar e atualizar as{" "}
        <C.Strong>informações</C.Strong> do seu perfil. <br />
        Além disso, acompanhe todas as suas <C.Strong>
          ocorrências
        </C.Strong> e <C.Strong>advertências</C.Strong> em um só lugar. <br />
        Para sua conveniência, logo abaixo, você pode verificar se há alguma
        nova ocorrência ou advertência registrada hoje. <br />
        Estamos aqui para facilitar sua vida e garantir que você tenha todas as
        informações necessárias ao seu alcance.
      </C.Text>
    </C.Container>
  );
};

export default CardTop;
