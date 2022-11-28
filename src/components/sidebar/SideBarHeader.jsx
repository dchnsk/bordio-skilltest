import styled from 'styled-components';
import { FlexCol } from '../common/flex';
import { Logo } from '../symbolic/logo';
import { SidebarSearch } from './SidebarSearch';

const SideBarHeaderStyled = styled(FlexCol)`
    padding: 26px 16px 0px 16px;
`;

export const SidebarHeader = () => (
    <SideBarHeaderStyled>
        <Logo />
        <SidebarSearch />
    </SideBarHeaderStyled>
);
