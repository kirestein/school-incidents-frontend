import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  height: 100%;
  width: 100%;
  /* background-color: ${props=>props.theme.colors.tertiary}; */
  background-color: #ddd;
  border-radius: .5rem;
  /* border: 1px solid #fff; */
  padding: 1rem;
`;

export const Title = styled.div`
  font-size: 1.4rem;
  color: ${props=>props.theme.colors.secondary900};
  margin-top: 1.4rem;
`;

export const Strong = styled.strong`
  color: ${props=>props.theme.colors.purple900};
  margin-top: 1.2rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${props=>props.theme.colors.secondary};
  margin-top: 20px;
`;


