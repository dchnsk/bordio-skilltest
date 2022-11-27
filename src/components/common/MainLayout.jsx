import { useEffect, useState } from 'react';
import { ImagePaths } from '../../constants';
import { SideBar } from '../sidebar';
import { ToolsList } from '../tools/ToolsList';
import { FlexRow } from './flex';

export const MainLayout = ({ children }) => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        setTools([
            { id: 0, isActive: false, data: { title: 'Roadmap', icon: ImagePaths.roadmapIcon } },
            { id: 1, isActive: true, data: { title: 'Schedule', icon: ImagePaths.calendarIcon } },
            { id: 2, isActive: false, data: { title: 'Tasks', icon: ImagePaths.tasksIcon } },
            { id: 3, isActive: false, data: { title: 'Notes', icon: ImagePaths.notesIcon } },
            { id: 4, isActive: false, data: { title: 'Files', icon: ImagePaths.filesIcon } },
        ]);
    }, []);

    return (
        <FlexRow minHeight="100vh">
            <SideBar />
            <ToolsList availibleTools={tools} />
            {children}
        </FlexRow>
    );
};
