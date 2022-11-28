import styled from 'styled-components';
import PropsTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { FlexCol, FlexRow } from '../common/flex';
import { Flex } from '../common/flex';
import { useState } from 'react';
import { ImagePaths } from '../../constants';

const DropDownMenuHeaderTitle = styled.span`
    color: ${(props) => props.theme.text.light};
`;

const DropDownMenuHeaderItem = styled.button`
    max-width: 75%;
    color: ${(props) => props.theme.text.inactive};
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
    transform: ${(props) => (props.isActive ? 'rotate(0deg)' : 'rotate(-90deg)')};
`;
const ArrowIcon = () => <ReactSVG src={ImagePaths.arrowDownIcon} />;

const DropDownMenuHeaderArrow = ({ isActive }) => {
    return (
        <DropDownMenuArrowStyled isActive={isActive}>
            <ArrowIcon />
        </DropDownMenuArrowStyled>
    );
};

const DropDownMenuHeaderMain = styled.button`
    background: none;
    max-width: 75%;
    border: none;
    cursor: pointer;
`;

const DropDownMenuHeader = ({ title, onClick, isActive }) => (
    <DropDownMenuHeaderMain onClick={onClick}>
        <FlexRow margin={'4px 0px'} alignItems={'center'}>
            <DropDownMenuHeaderArrow isActive={isActive} />
            <DropDownMenuHeaderTitle>{title}</DropDownMenuHeaderTitle>
        </FlexRow>
    </DropDownMenuHeaderMain>
);

export const DropDownMenu = ({ title, options }) => {
    const [isActive, setIsActive] = useState(true);

    return (
        <FlexCol>
            <DropDownMenuHeader
                title={title}
                onClick={() => {
                    setIsActive(!isActive);
                }}
                isActive={isActive}
            />
            {isActive ? (
                <FlexCol>
                    {options.map((option) => (
                        <DropDownMenuHeaderItem key={option.id}>{option.title}</DropDownMenuHeaderItem>
                    ))}
                </FlexCol>
            ) : null}
        </FlexCol>
    );
};

DropDownMenu.ropsTypes = {
    title: PropsTypes.string.isRequired,
    options: PropsTypes.array.isRequired,
};
