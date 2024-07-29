import React from 'react';
import * as C from "./styles";
import { useMyContext } from "../../../../context/Context";
import { useQuery } from '@tanstack/react-query';
import { Ocorrencia } from '../../../../Interfaces/Interface';
import Badge from '@mui/material/Badge';
import ReportIcon from "@mui/icons-material/Report";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import styled from '@emotion/styled';

const CardCenter: React.FC = () => {
  const { getOcorrencias, getAlunosAdvertidos, state } = useMyContext();
  const { isLoading: ocorrenciasLoading } = useQuery({
    queryKey: ["ocorrencias"],
    queryFn: getOcorrencias,
  });

  const MyBadge = styled(Badge)`
    display: flex;
    align-items: center;
    justify-content: center;
    .MuiBadge-anchorOriginTopRightRectangle {
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
  `;

  const getTodayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const todayDate = getTodayDate();
  
  // console.log(typeof ocorrencias);
  let ocorrenciasHoje: Ocorrencia[] = [];
  if (!ocorrenciasLoading && state.ocorrencias && typeof state.ocorrencias === 'object' && Array.isArray(state.ocorrencias.rows)) {
    state.ocorrencias.rows.filter((row) => {
      row.data === todayDate ? ocorrenciasHoje.push(row) : console.log('');
      return ocorrenciasHoje;
    });
  }

  const { isLoading: loadingAdvertencias } = useQuery({
    queryKey: ["alunosAdvertidos"],
    queryFn: getAlunosAdvertidos,
  });

  let advertenciasHoje: Ocorrencia[] = [];
  if (!loadingAdvertencias && state.alunosAdvertidos && typeof state.alunosAdvertidos === 'object' && Array.isArray(state.alunosAdvertidos.rows)) {
    state.alunosAdvertidos.rows.filter((row) => {
      row.data === todayDate ?? advertenciasHoje.push(row);
      return advertenciasHoje;
    });
  }
  
  return (
    <C.Container>
      <C.LeftContent>
        <C.CardContainer>
          <C.Card>
            <MyBadge badgeContent={
              ocorrenciasHoje.length > 0 ? ocorrenciasHoje.length : 0
            } color="primary">
              <NoteAltIcon />
                {
                  ocorrenciasHoje.length > 0 ? (
                    <C.Title>{ ocorrenciasHoje.length } Novas Ocorrências de Hoje</C.Title>
                  ) : (
                    <C.Title>Sem Ocorrências de Hoje</C.Title>
                  )
                }
                {/* <C.Title>Ocorrências de Hoje</C.Title>
                <C.Value>{ocorrenciasHoje.length}</C.Value> */}
            </MyBadge>
          </C.Card>
        </C.CardContainer>
      </C.LeftContent>
      <C.RightContent>
      <C.CardContainer>
          <C.Card>
            <MyBadge badgeContent={
              advertenciasHoje.length > 0 ? advertenciasHoje.length : 0
            } color="primary">
              <ReportIcon />
                {
                  advertenciasHoje.length > 0 ? (
                    <C.Title>{ advertenciasHoje.length } Alunos Advertidos de Hoje</C.Title>
                  ) : (
                    <C.Title>Sem Alunos Advertidos Hoje</C.Title>
                  )
                }
                {/* <C.Title>Ocorrências de Hoje</C.Title>
                <C.Value>{ocorrenciasHoje.length}</C.Value> */}
            </MyBadge>
          </C.Card>
        </C.CardContainer>
      </C.RightContent>
    </C.Container>
  );
}

export default CardCenter;