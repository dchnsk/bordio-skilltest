import styled from 'styled-components';
import { SearchInput } from '../search/SearchInput';

const SideBarSearchStyled = styled(SearchInput)`
    background-color: #2d4071;
    border: none;
    margin-bottom: 19px;
`;

export const SideBarSearch = () => {
    return <SideBarSearchStyled />;
};
