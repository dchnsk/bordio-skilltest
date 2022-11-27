import styled from 'styled-components';
import { SearchInput } from '../search/SearchInput';

const SideBarSearchStyled = styled(SearchInput)`
    background-color: ${(props) => props.theme.backgorund.highlight};
    border: none;
    margin-bottom: 19px;
`;

export const SideBarSearch = () => {
    return <SideBarSearchStyled />;
};
