import styled from 'styled-components';
import { AppColors } from '../../../../constants';
import { AppButton } from '../../input/AppButton';
import { ReactComponent as PlusIconSvg } from '../../../../assets/icons/plus-ic.svg';

const AddNewButtonStyled = styled(AppButton)`
    background-color: ${AppColors.theme.active};
    padding: 8px 20px;
    height: 40px;
    font-size: 14px;
    color: ${AppColors.theme.text.light};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-around;
    width: 120px;
`;

export const AddNewButton = () => (
    <AddNewButtonStyled>
        <PlusIconSvg /> Add new
    </AddNewButtonStyled>
);
