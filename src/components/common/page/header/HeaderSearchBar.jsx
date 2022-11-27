import styled from 'styled-components';
import { AppColors } from '../../../../constants';
import { SearchInputStyled } from '../../../search/SearchInput';

const SideBarSearchStyled = styled(SearchInputStyled)`
    background-color: ${AppColors.theme.backgorund.dark};
    border-radius: 50px;
    width: 180px;
    height: 100%;
    font-size: 14px;
    color: ${AppColors.theme.text.dark};
    border: none;
`;

export const HeaderSearchBar = () => {
    return <SideBarSearchStyled placeholder="Search..." />;
};
