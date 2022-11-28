import { WorkSpaceData } from '../../constants';
import { FlexCol } from '../common/flex';
import { SidebarNavigator } from './SidebarNavigator';
import { SidebarWorkSpaceTab } from './SidebarWorkSpaceTab';

export const SidebarBody = () => {
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
            <SidebarWorkSpaceTab workSpaceData={WorkSpaceData} />
            <SidebarNavigator sections={availibleSections} />
        </FlexCol>
    );
};
