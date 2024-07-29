import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.6rem;
  grid-template-areas: "HR HR" "BD BD" "FT FT";
  height: 100%;
  width: 100%;
  /* background-color: #f0f0f5; */
`;

export const ContentTop = styled.div`
  grid-area: HR;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentMiddle = styled.div`
  grid-area: BD;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentBottom = styled.div`
  grid-area: FT;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;