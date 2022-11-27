import { WorkSpaceData } from '../../constants';
import { FlexCol } from '../common/flex';
import { SideBarNavigator } from './SideBarNavigator';
import { SideBarWorkSpaceTab } from './SideBarWorkSpaceTab';

export const SideBarBody = () => {
    const availibleSections = [
        {
            id: 0,
            title: 'Favorites',
            options: [
                { id: 0, title: 'Marketing' },
                { id: 1, title: 'Mobile App' },
            ],
        },
        {
            id: 1,
            title: 'My Projects',
            options: [
                { id: 0, title: 'Marketing' },
                { id: 1, title: 'Landing Pages' },
                { id: 2, title: 'Wedding' },
                { id: 3, title: 'Mobile App' },
                { id: 4, title: 'House Construction' },
            ],
        },
    ];

    return (
        <FlexCol>
            <SideBarWorkSpaceTab workSpaceData={WorkSpaceData} />
            <SideBarNavigator sections={availibleSections} />
        </FlexCol>
    );
};
