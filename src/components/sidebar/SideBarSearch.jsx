import styled from 'styled-components';
import { SearchInputStyled } from '../search/SearchInput';

const SideBarSearchStyled = styled(SearchInputStyled)`
    background-color: #2d4071;
    border: none;
    margin-bottom: 19px;
`;

export const SideBarSearch = () => {
    return <SideBarSearchStyled placeholder="Search..." />;
};
