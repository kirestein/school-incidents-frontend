/* eslint-disable array-callback-return */
import React from "react";
import { useMyContext } from "../../context/Context";
import * as I from "../../Interfaces/Interface";
import * as C from "./styles";
import OcorrenciasComponents from "../../components/OcorrenciasComponents";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import HeaderComponent from "../../components/HeaderComponent";
import Input from "../../components/Input";

const Ocorrencias: React.FC = () => {
  const { textWrapFill, state, dispatch } = useMyContext();
  const getOcorrencias = async () => {
    console.log("entrei");
    try {
      console.log("try");
      const response = await fetch(
        "https://main--incidents-api.netlify.app/.netlify/functions/ocorrencias",
        {
          mode: "cors", // Adiciona o modo CORS explicitamente
          headers: {
            // 'Authorization': 'Bearer seu_token_aqui', // Exemplo se precisar de autenticação
            "Content-Type": "application/json", // Se sua API esperar JSON
          },
        }
      );
      console.log(response);
      const data = await response.json();
      // console.log('data ',data);
      dispatch({ type: I.ContextActions.setOcorrencias, payload: data });
      // console.log('data ',state.ocorrencias);
      return data;
    } catch (err: any) {
      toast.error(err);
      throw err;
    }
  };
  const { data, isLoading } = useQuery({
    queryKey: ["ocorrencias"],
    queryFn: getOcorrencias,
  });

  const dado = state.filtro ? state.filtro : state.data;
  console.log("dado: ", dado);

  const ocorrenciasFiltradas = data?.filter((item: string[]) => {
    dado === "" || item.includes(dado);
  });
  console.log(" OCORRENCIAS FILTRADAS ", ocorrenciasFiltradas);

  return (
    <C.Container>
      <HeaderComponent title="Ocorrências" linecolor="#F7931B">
        <Input
          name={state.filtro}
          setName={(name: string) =>
            dispatch({
              type: I.ContextActions.setFiltro,
              payload: name,
            })
          }
        />
        {state.filtro}
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
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {ocorrenciasFiltradas.length > 0
              ? ocorrenciasFiltradas?.map((item: string, index: any) => (
                  <OcorrenciasComponents
                    key={index}
                    message={item}
                    name={item}
                    data={state.data}
                  />
                ))
              : data?.map((item: string, index: any) => {
                  return (
                    <OcorrenciasComponents
                      key={index}
                      message={textWrapFill(item, 255)}
                      name={item}
                      data={state.data}
                    />
                  );
                })}
          </div>
        )}
      </C.Content>
    </C.Container>
  );
};

export default Ocorrencias;
