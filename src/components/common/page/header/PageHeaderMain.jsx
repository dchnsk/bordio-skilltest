import styled from 'styled-components';
import { FlexRow } from '../../flex';
import { AddNewButton } from './AddNewButton';
import { PageHeaderDropDown } from './PageHeaderDropDown';

const PageHeaderMainStyled = styled(FlexRow)`
    width: 380px;
    justify-content: space-between;
`;

export const PageHeaderMain = () => (
    <PageHeaderMainStyled>
        <AddNewButton />
        <PageHeaderDropDown title={'Kanban'} />
        <PageHeaderDropDown title={'Filter'} />
    </PageHeaderMainStyled>
);
