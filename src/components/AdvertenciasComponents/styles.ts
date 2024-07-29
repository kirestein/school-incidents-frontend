import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
    color: ${props => props.theme.colors.white};
    /* background-color: ${props => props.theme.colors.secondary}; */
    list-style: none;
    border-radius: 5px;
    /* box-shadow: .3rem .3rem 1rem ${props=>props.theme.colors.secondary}; */

    margin: 1rem 0;
    padding: 4rem;
`;