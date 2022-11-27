import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SideBar } from '../sidebar';
import { ToolsList } from '../tools/ToolsList';
import { FlexCol, FlexRow } from './flex';

const PageView = styled(FlexCol)`
    // Must be calculated dynamicaly
    width: calc(100% - 415px);
    transform: translateX(374px) translateZ(0px);
`;

export const MainLayout = ({ children }) => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        setTools([
            { id: 0, isActive: false, data: { title: 'Roadmap', icon: 'img/icons/roadmap-ic.svg' } },
            { id: 1, isActive: true, data: { title: 'Schedule', icon: 'img/icons/calendar-ic.svg' } },
            { id: 2, isActive: false, data: { title: 'Tasks', icon: 'img/icons/tasks-ic.svg' } },
            { id: 3, isActive: false, data: { title: 'Notes', icon: 'img/icons/notes-ic.svg' } },
            { id: 4, isActive: false, data: { title: 'Files', icon: 'img/icons/files-ic.svg' } },
        ]);
    }, []);

    return (
        <FlexRow minHeight="100vh">
            <SideBar />
            <ToolsList availibleTools={tools} />
            <PageView>{children}</PageView>
        </FlexRow>
    );
};
