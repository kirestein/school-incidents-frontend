import styled from "styled-components";


export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.tertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    box-shadow: .5rem 0 2rem ${props=>props.theme.colors.tertiary};
`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 1rem;
`

export const LogImg = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 3rem;
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    >a {
        transition: opacity .3s;
        margin: .5rem 0;
        display: flex;
        align-items: center;
        &:hover {
            opacity: .7;
        }
        > svg {
            font-size: 20px;
            margin-right: 5px;
        }
    
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;
    height: 1rem;
    color: ${props => props.theme.colors.white};
    border-top: 1px solid ${props => props.theme.colors.gray};
    font-size: 20px;
    /* margin-bottom: 1rem; */
    /* position: absolute;
    bottom: 0rem; */
`