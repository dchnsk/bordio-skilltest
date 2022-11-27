import { KanbanBoard } from '../components/boards';
import { MainLayout } from '../components/common/MainLayout';
import { Page } from '../components/common/page';

export const MainPage = () => {
    return (
        <MainLayout>
            <Page>
                <KanbanBoard />
            </Page>
        </MainLayout>
    );
};
