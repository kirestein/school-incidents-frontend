import styled from "styled-components";

interface ITitleContainerProps {
    $lineColor: string;
}

export const Container = styled.div`
    grid-area: CT;
    width: 100wh;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    background-color: ${props => props.theme.colors.primary};
    padding-left: 1rem;
    height: 2.5rem;
    /* border-bottom: 1px solid #fff; */
    
`

export const TitleContainer = styled.div<ITitleContainerProps>`
    > h1 {
        color: ${props => props.theme.colors.white};
        &::after {
            content: '';
            display: block;
            width: 100wh;
            border-bottom: 10px solid ${props => props.$lineColor};
        }
    }
`

export const Input = styled.input`
    width: 15rem;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.white};
`

export const Controllers = styled.div`
    display: flex;
`