import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const NotificationButtonStyled = styled.button`
    cursor: pointer;
`;

export const NotificationButton = () => (
    <NotificationButtonStyled>
        <ReactSVG src="img/icons/notification-ic.svg" />
    </NotificationButtonStyled>
);
