import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ImagePaths } from '../../../constants';
import { Flex, FlexRow } from '../../common/flex';

const SidebarDropDownHeaderTitle = styled.span`
    color: ${(props) => props.theme.text.light};
`;

const ArrowIcon = () => <ReactSVG src={ImagePaths.arrowDownIcon} />;

const SidebarDropDownArrowStyled = styled(Flex)`
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    transform: ${(props) => (props.isActive ? 'rotate(0deg)' : 'rotate(-90deg)')};
`;

const SidebarDropDownHeaderArrow = ({ isActive }) => {
    return (
        <SidebarDropDownArrowStyled isActive={isActive}>
            <ArrowIcon />
        </SidebarDropDownArrowStyled>
    );
};

const SidebarDropDownHeaderStyled = styled.button`
    background: none;
    max-width: 75%;
    border: none;
    cursor: pointer;
`;

export const SidebarDropDownHeader = ({ title, onClick, isActive = true }) => (
    <SidebarDropDownHeaderStyled onClick={onClick}>
        <FlexRow margin={'4px 0px'} alignItems={'center'}>
            <SidebarDropDownHeaderArrow isActive={isActive} />
            <SidebarDropDownHeaderTitle>{title}</SidebarDropDownHeaderTitle>
        </FlexRow>
    </SidebarDropDownHeaderStyled>
);
SidebarDropDownHeader.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};
