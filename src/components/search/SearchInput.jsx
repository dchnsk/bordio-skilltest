import styled from 'styled-components';
import { ImagePaths } from '../../constants';
import { TextInputStyled } from '../common/input/TextInput';

export const SearchInputStyled = styled(TextInputStyled)`
    background-image: url(${ImagePaths.searchIcon});
    background-repeat: no-repeat;
    background-position: right;
    padding: 10px;
    background-origin: content-box;
`;

export const SearchInput = () => {
    return <SearchInputStyled placeholder="Search..." />;
};
