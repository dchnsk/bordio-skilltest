import React from 'react';
import styled from 'styled-components';
import { SidebarHeader } from './SidebarHeader';
import { SidebarBody } from './SidebarBody';
import { FlexCol } from '../common/flex';

const SidebarStyled = styled(FlexCol)`
    background-color: ${(props) => props.theme.backgorund.primary};
    max-width: 219px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    position: fixed;
`;

export const Sidebar = () => {
    return (
        <SidebarStyled>
            <SidebarHeader />
            <SidebarBody />
        </SidebarStyled>
    );
};
