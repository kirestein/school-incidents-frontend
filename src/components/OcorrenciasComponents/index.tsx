import React, { useEffect } from "react";
import * as C from "./styles";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useMyContext } from "../../context/Context";
import { styled } from "@mui/material/styles";

const CustomDataGrid = styled(DataGrid)`
  background-color: #4a148c;
  color: #fafafa;
  border: none;
  border-radius: .7rem;
  width: auto;
  height: auto;
  & .css-1knaqv7-MuiButtonBase-root-MuiButton-root {
    color: #fafafa;
  }
  & .css-swk352-MuiDataGrid-root,
  & .MuiDataGrid-columnHeader {
    min-width: 6.25rem !important;
  }
  & .css-1eed5fa-MuiInputBase-root-MuiInput-root {
    color: #fafafa;
  }
  & .css-yrdy0g-MuiDataGrid-columnHeaderRow {
    color: #4a148c;
  }
  /* MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular MuiTablePagination-toolbar css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar  */
  & .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar {
    color: #fafafa;
  }
  & .css-1v1qplz-MuiDataGrid-root .MuiDataGrid-cell {
    min-width: 6.25rem !important;
  }
`;

const OcorrenciasComponents: React.FC = () => {
  const { state, getOcorrencias } = useMyContext();

  useEffect(() => {
    if (state.ocorrencias === null) {
      getOcorrencias();
    }
  }, [state.ocorrencias, getOcorrencias]);

  const data = state.ocorrencias;
  return (
    // quero que possa filtrar pela data
    <C.Container>
      <Box sx={{ height: '100%', width: "100%" }}>
        <CustomDataGrid
          {...data}
          pagination
          pageSizeOptions={[10, 20, 30]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          columns={[
            {
              field: "data",
              headerName: "Data",
              type: "string",
              minWidth: 100,
              editable: false,
            },
            {
              field: "aluno",
              headerName: "Aluno",
              minWidth: 250,
              editable: false,
            },
            {
              field: "turma",
              headerName: "Turma",
              minWidth: 110,
              editable: false,
            },
            {
              field: "motivo",
              headerName: "Motivo",
              minWidth: 1500,
              flex: 1,
              editable: false,
            },
            {
              field: "professor",
              headerName: "Professor",
              minWidth: 190,
              editable: false,
            },
          ]}
          // alterar a altura das linhas
          rowHeight={70}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </C.Container>
  );
};

export default OcorrenciasComponents;
