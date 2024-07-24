import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 12% auto;
    grid-template-rows: 1fr;
    grid-template-areas: "SB CT";
    height: 100vh;
    width: 100%;
`;

export const Menu = styled.div`
    grid-area: SB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5rem 0;
`

export const Content = styled.div`
    grid-area: CT;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    overflow: auto;
    /* padding: 1rem; */
    height: 100%;
    width: 100%;
`;