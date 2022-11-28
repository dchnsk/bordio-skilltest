import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexRow } from '../../../common/flex';

const KanbanColumnRowCounterStyled = styled.div`
    color: ${(props) => props.theme.text.dark};
    background-color: ${(props) => props.theme.backgorund.dark};
    padding: 2px 9px;
    border-radius: 100px;
`;
const KanbanColumnRowCounter = ({ amountOfRows }) => (
    <KanbanColumnRowCounterStyled>{amountOfRows}</KanbanColumnRowCounterStyled>
);
KanbanColumnRowCounter.propTypes = {
    amountOfRows: PropTypes.number.isRequired,
};

const KanbanColumnTitle = styled.span`
    color: ${(props) => props.theme.text.dark};
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

export const KanbanColumnHeader = ({ title, amountOfRows }) => (
    <KanbanColumnHeaderStyled>
        <KanbanColumnTitle>{title}</KanbanColumnTitle>
        <KanbanColumnRowCounter amountOfRows={amountOfRows} />
    </KanbanColumnHeaderStyled>
);
KanbanColumnHeader.propTypes = {
    title: PropTypes.string.isRequired,
    amountOfRows: PropTypes.number.isRequired,
};
