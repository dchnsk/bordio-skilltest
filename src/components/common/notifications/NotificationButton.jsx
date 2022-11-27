import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { ImagePaths } from '../../../constants';

const NotificationButtonStyled = styled.button`
    cursor: pointer;
`;

export const NotificationButton = () => (
    <NotificationButtonStyled>
        <ReactSVG src={ImagePaths.notificationIcon} />
    </NotificationButtonStyled>
);
