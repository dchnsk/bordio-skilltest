import styled from 'styled-components';
import { FlexCol } from '../common/flex';
import { DropDownMenu } from './DropDown';

const SideBarNavigatorStyled = styled(FlexCol)`
    padding-left: 16px;
`;

export const SideBarNavigator = ({ sections }) => {
    return (
        <SideBarNavigatorStyled>
            {sections.map((section) => (
                <DropDownMenu key={section.id} title={section.title} options={section.options} />
            ))}
        </SideBarNavigatorStyled>
    );
};
