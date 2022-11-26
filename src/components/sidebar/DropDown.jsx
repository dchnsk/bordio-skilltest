import { FlexCol, FlexRow } from '../common/flex';
import { ReactComponent as ArrowDownSvg } from '../../assets/icons/arrow-down-ic.svg';
import styled from 'styled-components';
import { AppColors } from '../../constants';
import { Flex } from '../common/flex/Flex';

const DropDownMenuHeaderTitle = styled.span`
    color: ${AppColors.theme.text.light};
`;

const DropDownMenuHeaderItem = styled.button`
    max-width: 75%;
    color: ${AppColors.theme.text.inactive};
    background: none;
    border: none;
    align-items: flex-start;
    display: flex;
    cursor: pointer;
    margin-bottom: 18px;
    &:first-child {
        margin-top: 18px;
    }
`;

const DropDownMenuArrowStyled = styled(Flex)`
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
`;

const DropDownMenuHeaderArrow = ({ isActive }) => {
    return <DropDownMenuArrowStyled>{isActive ? <ArrowDownSvg /> : <ArrowDownSvg />}</DropDownMenuArrowStyled>;
};

const DropDownMenuHeaderMain = styled.button`
    background: none;
    max-width: 75%;
    border: none;
    cursor: pointer;
`;

const DropDownMenuHeader = ({ title }) => (
    <DropDownMenuHeaderMain>
        <FlexRow margin={'4px 0px'} alignItems={'center'}>
            <DropDownMenuHeaderArrow isActive />
            <DropDownMenuHeaderTitle>{title}</DropDownMenuHeaderTitle>
        </FlexRow>
    </DropDownMenuHeaderMain>
);

export const DropDownMenu = ({ title, options }) => {
    return (
        <FlexCol>
            <DropDownMenuHeader title={title} />
            <FlexCol>
                {options.map((option) => (
                    <DropDownMenuHeaderItem key={option.id}>{option.title}</DropDownMenuHeaderItem>
                ))}
            </FlexCol>
        </FlexCol>
    );
};
