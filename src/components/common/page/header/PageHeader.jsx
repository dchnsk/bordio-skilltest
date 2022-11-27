import styled from 'styled-components';
import { WorkSpaceData } from '../../../../constants';
import { FlexRow } from '../../flex';
import { PageHeaderMain } from './PageHeaderMain';
import { PageHeaderSecondary } from './PageHeaderSecondary';

const PageHeaderStyled = styled(FlexRow)`
    height: 80px;
    width: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgb(240 241 242) 0px 2px 4px;
`;

export const PageHeader = () => {
    return (
        <PageHeaderStyled>
            <PageHeaderMain />
            <PageHeaderSecondary workSpaceData={WorkSpaceData} />
        </PageHeaderStyled>
    );
};
