import styled from 'styled-components';
import { AppColors } from '../../../constants';

const KanbanRowDeadline = styled.span`
    opacity: 85%;
    font-size: 13px;
`;

const KanbanRowTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
`;

const KanbanRowStyled = styled.button`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    text-align: start;
    color: ${AppColors.theme.text.dark};
    padding: 15px;
    background-color: ${(props) => props?.bgColor};
    min-width: 270px;
    border-radius: 8px;
    min-height: 69px;
    margin-bottom: 10px;
`;

export const KanbanRow = ({ data, isCompleted = false }) => (
    <KanbanRowStyled bgColor={!isCompleted ? '#ABE9CE' : AppColors.theme.backgorund.dark}>
        <KanbanRowTitle style={isCompleted ? { textDecoration: 'line-through' } : {}}>{data.title}</KanbanRowTitle>
        <KanbanRowDeadline>{data.deadline}</KanbanRowDeadline>
    </KanbanRowStyled>
);
