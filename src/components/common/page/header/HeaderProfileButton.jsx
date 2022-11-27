import { ProfilePhoto } from '../../../profile/ProfilePhoto';
import styled from 'styled-components';
import { workSpaceData } from '../../../../constants';

const HeaderProfileButtonStyled = styled.button`
    cursor: pointer;
`;

export const HeaderProfileButton = () => (
    <HeaderProfileButtonStyled>
        <ProfilePhoto src={workSpaceData.profile.img} alt={workSpaceData.profile.name} width={40} height={40} />
    </HeaderProfileButtonStyled>
);
