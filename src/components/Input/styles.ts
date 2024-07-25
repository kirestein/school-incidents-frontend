import styled from "styled-components";

export const Container = styled.div``

export const InputContainer = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 20rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.white};
    
`