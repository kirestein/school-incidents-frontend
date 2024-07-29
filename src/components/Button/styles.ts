import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Button = styled.button`
    margin: 0.3rem 0 0;
    background: ${props=>props.theme.colors.secondary};
    color: ${props=>props.theme.colors.white};
    height: 2.75rem;
    padding: 0.8rem;
    border: 0;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    transition: .3s all;
    &:hover {
        background: ${props=>props.theme.colors.secondary};
        box-shadow: 0 0 1.5rem ${props=>props.theme.colors.black};
    }
`;