import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexCol } from '../../../common/flex';
import { KanbanRow } from '../kanban-row';
import { KanbanColumnHeader } from './KanbanColumnHeader';
import { KanbanColumnBody } from './KanbanColumnBody';

const KanbanColumnSyled = styled(FlexCol)`
    height: 100%;
    min-width: 300px;
`;

export const KanbanColumn = ({ data }) => (
    <KanbanColumnSyled>
        <KanbanColumnHeader title={data.title} amountOfRows={data.rows.length} />
        <KanbanColumnBody>
            {data.rows.map((row) => (
                <KanbanRow isCompleted={row.isCompleted} key={row.id} data={row} />
            ))}
        </KanbanColumnBody>
    </KanbanColumnSyled>
);
KanbanColumn.propTypes = {
    data: PropTypes.object,
};
