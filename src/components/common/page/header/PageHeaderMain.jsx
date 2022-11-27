import styled from 'styled-components';
import { FlexRow } from '../../flex';
import { AddNewButton } from './AddNewButton';
import { PageHeaderDropDown } from './dropdown';

const PageHeaderDropDownElementsData = [
    {
        id: 0,
        title: 'Kanban',
        elements: [
            { id: 0, title: 'Board view' },
            { id: 1, title: 'Table view' },
            { id: 2, title: 'Kanban' },
        ],
    },
    {
        id: 1,
        title: 'Filter',
        elements: [{ id: 0, title: 'By date' }],
    },
];

const PageHeaderMainStyled = styled(FlexRow)`
    width: 380px;
    justify-content: space-between;
`;

export const PageHeaderMain = () => (
    <PageHeaderMainStyled>
        <AddNewButton />
        {PageHeaderDropDownElementsData.map((el) => (
            <PageHeaderDropDown key={el.id} title={el.title} elements={el.elements} />
        ))}
    </PageHeaderMainStyled>
);
