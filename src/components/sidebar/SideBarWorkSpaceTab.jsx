import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexRow } from '../common/flex';
import { ProfilePhoto } from '../profile/ProfilePhoto';

const SidebarWorkSpaceTabStyled = styled(FlexRow)`
    background-color: ${(props) => props.theme.backgorund.highlight};
    height: 34px;
    padding-left: 16px;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.text.light};
    margin-bottom: 17px;
`;

export const SidebarWorkSpaceTab = ({ workSpaceData }) => {
    return (
        <SidebarWorkSpaceTabStyled>
            <ProfilePhoto
                src={workSpaceData.profile.img}
                alt={workSpaceData.profile.name}
                width={22}
                height={22}
                style={{ marginRight: '8px' }}
            />
            <span>My workspace</span>
        </SidebarWorkSpaceTabStyled>
    );
};
SidebarWorkSpaceTab.propTypes = {
    workSpaceData: PropTypes.object.isRequired,
};
