import styled from 'styled-components';
import { AppButton } from '../../input/AppButton';
import { ReactSVG } from 'react-svg';

const AddNewButtonStyled = styled(AppButton)`
    background-color: ${(props) => props.theme.active};
    padding: 8px 20px;
    height: 40px;
    font-size: 14px;
    color: ${(props) => props.theme.text.light};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-around;
    width: 120px;
`;

export const AddNewButton = () => (
    <AddNewButtonStyled>
        <ReactSVG src={'img/icons/plus-ic.svg'} /> Add new
    </AddNewButtonStyled>
);
