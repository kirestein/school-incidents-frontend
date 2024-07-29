import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0.6rem;
  grid-template-areas: "LF RT";
  height: 100%;
  width: 100%;
`;

export const LeftContent = styled.div`
  grid-area: LF;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: ${(props) => props.theme.colors.tertiary}; */
  background-color: #ddd;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const RightContent = styled.div`
  grid-area: RT;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: ${(props) => props.theme.colors.tertiary}; */
  background-color: #ddd;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const Title = styled.div`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.secondary900};
  margin: 1.4rem;
`;

export const Strong = styled.strong`
  color: ${(props) => props.theme.colors.purple900};
  margin-top: 1.2rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray};
  margin-top: 20px;
`;

//card
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 100%;
  & .css-i4bv87-MuiSvgIcon-root{
    color: ${props=>props.theme.colors.secondary900};
  }
  & .MuiDivider-root, 
  .MuiDivider-fullWidth, 
  .css-9mgopn-MuiDivider-root{
    background-color: ${props=>props.theme.colors.black};
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: ${(props) => props.theme.colors.tertiary}; */
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const Value = styled.div`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.secondary900};
  margin-top: 1.4rem;
`;

