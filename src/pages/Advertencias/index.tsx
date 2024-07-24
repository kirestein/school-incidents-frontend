import React from "react";
import { useMyContext } from "../../context/Context";
import * as I from "../../Interfaces/Interface";
import * as C from "./styles";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import AdvertenciasComponents from "../../components/AdvertenciasComponents";
import HeaderComponent from "../../components/HeaderComponent";
import Input from "../../components/Input";

// import { Container } from './styles';

const Advertencias: React.FC = () => {
  const { textWrapFill, state, dispatch } = useMyContext();
  const getAlunosAdvertidos = async () => {
    try {
      const response = await fetch(
        "https://main--incidents-api.netlify.app/.netlify/functions/alunosAdvertidos",
        {
          mode: "cors", // Adiciona o modo CORS explicitamente
          headers: {
            // 'Authorization': 'Bearer seu_token_aqui', // Exemplo se precisar de autenticação
            "Content-Type": "application/json", // Se sua API esperar JSON
          },
        }
      );
      const data = await response.json();
      dispatch({ type: I.ContextActions.setAlunosAdvertidos, payload: data });
      return data;
    } catch (err: any) {
      toast.error(err);
      throw err;
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["alunosAdvertidos"],
    queryFn: getAlunosAdvertidos,
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  const dado = state.filtro ? state.filtro : data;

  const advertenciasFiltradas: string[] = state.alunosAdvertidos
    .filter((advertencia) => dado === "" || advertencia.includes(dado))
    .reduce((acc: string[], advertencia) => {
      if (!acc.includes(advertencia)) {
        acc.push(advertencia);
      }
      return acc;
    }, []);

  return (
    <C.Container>
      <HeaderComponent title="Alunos Advertidos" linecolor="#F7931B">
        <Input
          name={state.filtro}
          setName={(name: string) =>
            dispatch({
              type: I.ContextActions.setFiltro,
              payload: name,
            })
          }
        />
        <Input
          type="date"
          name={state.data}
          setName={(name: string) =>
            dispatch({
              type: I.ContextActions.setData,
              payload: name,
            })
          }
        />
      </HeaderComponent>
      <C.Content>
        {advertenciasFiltradas.map((ocorrencia, index) => (
          <AdvertenciasComponents
            key={index}
            message={textWrapFill(ocorrencia, 100)}
            name={state.filtro}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};

export default Advertencias;
