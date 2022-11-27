import styled from 'styled-components';
import { SearchInputStyled } from '../../../search/SearchInput';

const SideBarSearchStyled = styled(SearchInputStyled)`
    width: 180px;
    height: 100%;
    padding: 12px 30px 12px 16px;
    background-color: ${(props) => props.theme.backgorund.dark};
    color: ${(props) => props.theme.text.dark};
    border-radius: 50px;
    font-size: 14px;
    border: none;
`;

export const HeaderSearchBar = () => {
    return <SideBarSearchStyled placeholder="Search..." />;
};
