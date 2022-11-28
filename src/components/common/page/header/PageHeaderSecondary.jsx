import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexRow } from '../../flex';
import { NotificationButton } from '../../../notifications/NotificationButton';
import { HeaderProfileButton } from './HeaderProfileButton';
import { HeaderSearchBar } from './HeaderSearchBar';

const PageHeaderSecondaryStyled = styled(FlexRow)`
    width: 284px;
    align-items: center;
    justify-content: space-between;
`;

export const PageHeaderSecondary = ({ workSpaceData }) => (
    <PageHeaderSecondaryStyled>
        <HeaderSearchBar />
        <NotificationButton />
        <HeaderProfileButton />
    </PageHeaderSecondaryStyled>
);

PageHeaderSecondary.propTypes = {
    workSpaceData: PropTypes.object.isRequired,
};
