import styled from 'styled-components';
import { AppColors } from '../../../../constants';
import { AppButton } from '../../input/AppButton';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/icons/arrow-down-ic.svg';

const PageHeaderDropDownStyled = styled(AppButton)`
    background-color: ${AppColors.theme.backgorund.dark};
    padding: 8px 20px;
    height: 40px;
    font-size: 14px;
    color: ${AppColors.theme.text.dark};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-around;
    width: 120px;
`;

export const PageHeaderDropDown = ({ title }) => (
    <PageHeaderDropDownStyled>
        {title}
        <ArrowDownIcon color="#8C939F" fill="#8C939F" stroke="#8C939F" />
    </PageHeaderDropDownStyled>
);
