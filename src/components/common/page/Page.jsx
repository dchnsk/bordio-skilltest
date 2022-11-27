import styled from 'styled-components';
import { FlexCol } from '../flex';
import { PageHeader } from './header/PageHeader';

const PageStyled = styled(FlexCol)`
    // Must be calculated dynamicaly
    width: calc(100% - 415px);
    transform: translateX(374px) translateZ(0px);
`;

export const Page = ({ children }) => (
    <PageStyled>
        <PageHeader />
        {children}
    </PageStyled>
);
