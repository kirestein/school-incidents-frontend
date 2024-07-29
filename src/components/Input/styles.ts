import styled from "styled-components";

export const Container = styled.div``

export const InputContainer = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 25rem;
    padding: 1rem;
    border-radius: 0.5rem;
    color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.white};
    margin: 1rem 0;
    font-size: 1.2rem;
`