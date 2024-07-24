import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    padding: 25px;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 0.5rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
`;