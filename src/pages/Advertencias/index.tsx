import React, { useEffect } from "react";
import { useMyContext } from "../../context/Context";
import * as I from "../../Interfaces/Interface";
import * as C from "./styles";
import { useQuery } from "@tanstack/react-query";
import AdvertenciasComponents from "../../components/AdvertenciasComponents";
import HeaderComponent from "../../components/HeaderComponent";
import Input from "../../components/Input";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// import { Container } from './styles';

const Advertencias: React.FC = () => {
  const { textWrapFill, state, dispatch, getAlunosAdvertidos } = useMyContext();
  const [open, setOpen] = React.useState(true);
  
  
  const { isLoading } = useQuery({
    queryKey: ["alunosAdvertidos"],
    queryFn: getAlunosAdvertidos,
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
