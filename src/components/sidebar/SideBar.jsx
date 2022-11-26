import React from 'react';
import styled from 'styled-components';
import { AppColors } from '../../constants';
import { SideBarHeader } from './SideBarHeader';
import { SideBarBody } from './SideBarBody';
import { FlexCol } from '../common/flex';

const SideBarStyled = styled(FlexCol)`
    background-color: ${AppColors.theme.backgorund.primary};
    max-width: 219px;
    height: 100%;
`;

export const SideBar = () => {
    return (
        <>
            <SideBarStyled>
                <SideBarHeader />
                <SideBarBody />
            </SideBarStyled>
        </>
    );
};