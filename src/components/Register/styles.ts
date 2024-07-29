import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1rem;
    margin: 1rem 0;
    /* border: 1px solid #ccc; */
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.6rem;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
    margin: 1.34;
    border: 1px solid rgba(255, 255, 255, 0.1);
    &:hover{
        box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.6);
    }
    a{
        margin: 1rem 0;
        color: ${props=>props.theme.colors.tertiary};
        transition: all .3s;
        &:hover {
            color: ${props=>props.theme.colors.secondary};
        }
    }
`;

export const Login = styled.div`
    margin-left: auto;
    margin-right: auto;
    /* margin-top: 2rem; */
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    text-align: center;
    padding: 0  0 1rem 0;
`;

