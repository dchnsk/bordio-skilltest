import styled from 'styled-components';
import { AppColors } from '../../../constants';
import { FlexCol, FlexRow } from '../../common/flex';
import { KanbanRow } from './KanbanRow';

const KanbanColumnRowsBlock = styled(FlexCol)`
    padding: 40px 20px;
    border-top: 1px solid ${AppColors.theme.backgorund.dark};
    border-right: 1px solid ${AppColors.theme.backgorund.dark};
`;

const KanbanColumnRowCounterStyled = styled.div`
    color: ${AppColors.theme.text.dark};
    background-color: ${AppColors.theme.backgorund.dark};
    padding: 2px 9px;
    border-radius: 100px;
`;
const KanbanColumnRowCounter = ({ amountOfRows }) => (
    <KanbanColumnRowCounterStyled>{amountOfRows}</KanbanColumnRowCounterStyled>
);

const KanbanColumnTitle = styled.span`
    color: ${AppColors.theme.text.dark};
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
`;

const KanbanColumnHeaderStyled = styled(FlexRow)`
    justify-content: center;
    align-items: center;
    min-height: 60px;
    width: 100%;
`;
const KanbanColumnHeader = ({ title, amountOfRows }) => (
    <KanbanColumnHeaderStyled>
        <KanbanColumnTitle>{title}</KanbanColumnTitle>
        <KanbanColumnRowCounter amountOfRows={amountOfRows} />
    </KanbanColumnHeaderStyled>
);

const KanbanColumnSyled = styled(FlexCol)`
    height: 100%;
    min-width: 300px;
`;
export const KanbanColumn = ({ data }) => (
    <KanbanColumnSyled>
        <KanbanColumnHeader title={data.title} amountOfRows={data.rows.length} />
        <KanbanColumnRowsBlock>
            {data.rows.map((row) => (
                <KanbanRow isCompleted={row.isCompleted} key={row.id} data={row} />
            ))}
        </KanbanColumnRowsBlock>
    </KanbanColumnSyled>
);
