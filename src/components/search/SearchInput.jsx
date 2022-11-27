import styled from 'styled-components';
import { ImagePaths } from '../../constants';
import { TextInputStyled } from '../common/input/TextInput';

export const SearchInput = styled(TextInputStyled).attrs((props) => ({
    placeholder: 'Search...',
}))`
    background-image: url(${ImagePaths.searchIcon});
    background-repeat: no-repeat;
    background-position: 93%;
    padding: 10px 30px 10px 10px;
`;
