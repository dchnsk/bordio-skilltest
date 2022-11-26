import { FlexCol } from '../common/flex';
import { SideBarNavigator } from './SideBarNavigator';
import { SideBarWorkSpaceTab } from './SideBarWorkSpaceTab';

export const SideBarBody = () => {
    const workSpaceData = {
        profile: {
            name: 'Check Check',
            img: 'https://media.istockphoto.com/id/1365310330/photo/excited-young-indian-man-winner-using-smartphone-isolated-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=JwrK0kALlICrfSwxI_2OEVLbrsIh7Igg4L3RijPLo7U=',
        },
    };

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
            <SideBarWorkSpaceTab workSpaceData={workSpaceData} />
            <SideBarNavigator sections={availibleSections} />
        </FlexCol>
    );
};
