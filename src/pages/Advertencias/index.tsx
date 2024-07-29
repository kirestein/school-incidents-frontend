import React, { useEffect } from "react";
import { useMyContext } from "../../context/Context";
import * as C from "./styles";
import { useQuery } from "@tanstack/react-query";
import AdvertenciasComponents from "../../components/AdvertenciasComponents";
import HeaderComponent from "../../components/HeaderComponent";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Advertencias: React.FC = () => {
  const { getAlunosAdvertidos } = useMyContext();
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
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

  return (
    <C.Container>
      <HeaderComponent title="Alunos Advertidos" linecolor="#F7931B" />
      <C.Content>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {<AdvertenciasComponents />}
          </div>
        )}
      </C.Content>
    </C.Container>
  );
};

export default Advertencias;
