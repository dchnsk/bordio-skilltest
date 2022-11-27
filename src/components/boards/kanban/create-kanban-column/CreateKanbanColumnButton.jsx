import styled from 'styled-components';
import { AppButton } from '../../../common/input/AppButton';

export const CreateKanbanColumnButton = styled(AppButton)`
    width: 101px;
    border-radius: 20px;
    color: ${(props) => props.theme.text.lightGray};
    display: flex;
    justify-content: space-between;
`;
