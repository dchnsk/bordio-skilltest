import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { ImagePaths } from '../../../../constants';
import { FlexCol, FlexRow } from '../../../common/flex';
import { CreateKanbanColumnButton } from './CreateKanbanColumnButton';

const CreateKanbanColumnBody = styled(FlexCol)`
    border-top: 1px solid ${(props) => props.theme.backgorund.dark};
`;

const CreateKanbanColumnHeaderStyled = styled(FlexRow)`
    justify-content: flex-start;
    align-items: center;
    padding-left: 36px;
    min-height: 60px;
    width: 100%;
`;

const CreateKanbanColumnHeader = () => (
    <CreateKanbanColumnHeaderStyled>
        <CreateKanbanColumnButton>
            <ReactSVG src={ImagePaths.plusGrayIcon} />
            Create Status
        </CreateKanbanColumnButton>
    </CreateKanbanColumnHeaderStyled>
);

const CreateKanbanColumnStyled = styled(FlexCol)`
    height: 100%;
    min-width: 300px;
`;

export const CreateKanBanColumn = () => (
    <CreateKanbanColumnStyled>
        <CreateKanbanColumnHeader />
        <CreateKanbanColumnBody />
    </CreateKanbanColumnStyled>
);
