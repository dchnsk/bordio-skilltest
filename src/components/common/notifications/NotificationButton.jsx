import styled from 'styled-components';
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification-ic.svg';

const NotificationButtonStyled = styled.button`
    cursor: pointer;
`;

export const NotificationButton = () => (
    <NotificationButtonStyled>
        <NotificationIcon />
    </NotificationButtonStyled>
);
