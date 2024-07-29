import React, { useEffect } from "react";
import { useMyContext } from "../../context/Context";
import * as C from "./styles";
import OcorrenciasComponents from "../../components/OcorrenciasComponents";
import { useQuery } from "@tanstack/react-query";
import HeaderComponent from "../../components/HeaderComponent";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Ocorrencias: React.FC = () => {
  const { getOcorrencias } = useMyContext();
  const [open, setOpen] = React.useState(true);

  const { isLoading } = useQuery({
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
      <HeaderComponent title="Ocorrências" linecolor="#F7931B" />
      <C.Content>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {<OcorrenciasComponents />}
          </div>
        )}
      </C.Content>
    </C.Container>
  );
};

export default Ocorrencias;
