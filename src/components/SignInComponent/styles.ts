import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 1rem;
    background: ${props=>props.theme.colors.primary900};
    border-radius: 0.6rem;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
    margin: 1.34rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    /* border: 1px solid #fff; */
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

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 10%; */
    padding: 1rem;
    text-align: center;
    background-color: ${props=>props.theme.colors.tertiary900};
    border-radius: .5rem;
`;

export const Title = styled.div`
    font-size: 2rem;
    color: ${props=>props.theme.colors.white};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    padding: 1rem;
    /* border: 1px solid #fff; */
`;

export const TitleStrong = styled.strong`
    color: ${props=>props.theme.colors.purple900};
    font-weight: 800;
`;

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* width: 100%; */
    padding: 1rem;
    
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
    margin: 1rem 0;
    /* border: 1px solid #fff; */
`;

export const Span = styled.span`
    color: ${props=>props.theme.colors.tertiary};
    font-size: 1rem;
    margin: 1rem 0;
`;
