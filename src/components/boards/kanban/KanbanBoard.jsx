import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { KanbanBoardData } from '../../../constants';
import { FlexRow } from '../../common/flex';
import { CreateKanBanColumn } from './create-kanban-column';
import { KanbanColumn } from './KanbanColumn';

const KanBanBoardStyled = styled(FlexRow)`
    height: 100%;
    overflow: auto;
`;
export const KanbanBoard = () => {
    const [kanbanBoardData, setKanBanBoardData] = useState();

    useEffect(() => {
        setKanBanBoardData(KanbanBoardData);
    }, []);

    return (
        <KanBanBoardStyled>
            {kanbanBoardData?.columns.length
                ? kanbanBoardData.columns.map((col) => <KanbanColumn key={col.id} data={col} />)
                : null}
            <CreateKanBanColumn />
        </KanBanBoardStyled>
    );
};
