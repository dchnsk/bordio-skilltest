import styled from 'styled-components';
import { FlexCol } from '../common/flex';
import { SidebarDropDown } from './sidebar-dropdown';

const SidebarNavigatorStyled = styled(FlexCol)`
    padding-left: 16px;
`;

export const SidebarNavigator = ({ sections }) => {
    return (
        <SidebarNavigatorStyled>
            {sections.map((section) => (
                <SidebarDropDown key={section.id} title={section.title} options={section.options} />
            ))}
        </SidebarNavigatorStyled>
    );
};
