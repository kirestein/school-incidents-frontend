import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    /* border: 1px solid #fff; */
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${props=>props.theme.colors.white};
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    height: 100%;
    padding: 1rem;
`;

export const FormTitle = styled.legend`
    color: ${props=>props.theme.colors.white};
    font-size: 1.5rem;
    margin: 1.5rem;
    padding: 1rem;
    font-weight: 600;
`;