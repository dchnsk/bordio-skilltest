import styled from 'styled-components';

export const TextInputStyled = styled.input`
    background: none;
    border: 2px solid black;
    color: white;
    font-size: 14px;
    text-align: flex-start;
    border-radius: 0.5em;
`;

export const TextInput = () => {
    return <TextInputStyled />;
};
