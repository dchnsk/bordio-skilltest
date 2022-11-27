import styled from 'styled-components';
import { FlexCol } from '../common/flex';
import { Logo } from '../symbolic/logo';
import { SideBarSearch } from './SideBarSearch';

const SideBarHeaderStyled = styled(FlexCol)`
    padding: 26px 16px 0px 16px;
`;

export const SideBarHeader = () => (
    <SideBarHeaderStyled>
        <Logo />
        <SideBarSearch />
    </SideBarHeaderStyled>
);
