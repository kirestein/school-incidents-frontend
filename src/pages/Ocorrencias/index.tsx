/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useMyContext } from "../../context/Context";
import * as I from "../../Interfaces/Interface";
import * as C from "./styles";
import OcorrenciasComponents from "../../components/OcorrenciasComponents";
import { useQuery } from "@tanstack/react-query";
import HeaderComponent from "../../components/HeaderComponent";
import Input from "../../components/Input";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Ocorrencias: React.FC = () => {
  const { textWrapFill, state, dispatch, getOcorrencias } = useMyContext();
  const [open, setOpen] = React.useState(true);

  const { data, isLoading } = useQuery({
    queryKey: ["ocorrencias"],
    queryFn: getOcorrencias,
  });

  useEffect(() => {
    if (!isLoading) {
      setOpen(false);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

  const dado = state.filtro ? state.filtro : state.data;
  // console.log("dado: ", dado);

  const entradas = Array.isArray(data)
    ? data.filter((item: string[]) => {
        return dado === "" || item.includes(dado);
      })
    : [];

  // console.log(" OCORRENCIAS FILTRADAS ", entradas);

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
            {entradas.length > 0
              ? entradas?.map((item: string, index: any) => (
                  <OcorrenciasComponents
                    key={index}
                    message={item}
                    name={item}
                    data={state.data}
                  />
                ))
              : Array.isArray(data) &&
                data.map((item: string, index: any) => {
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
