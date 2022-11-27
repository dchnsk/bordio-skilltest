import { ProfilePhoto } from '../../../profile/ProfilePhoto';
import styled from 'styled-components';
import { WorkSpaceData } from '../../../../constants';

const HeaderProfileButtonStyled = styled.button`
    cursor: pointer;
`;

export const HeaderProfileButton = () => (
    <HeaderProfileButtonStyled>
        <ProfilePhoto src={WorkSpaceData.profile.img} alt={WorkSpaceData.profile.name} width={40} height={40} />
    </HeaderProfileButtonStyled>
);
