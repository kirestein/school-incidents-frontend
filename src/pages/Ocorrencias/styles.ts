import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    padding: 25px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
`;