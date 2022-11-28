import styled from 'styled-components';
import { FlexCol } from '../../../common/flex';

export const KanbanColumnBody = styled(FlexCol)`
    padding: 40px 20px;
    border-top: 1px solid ${(props) => props.theme.backgorund.dark};
    border-right: 1px solid ${(props) => props.theme.backgorund.dark};
`;
