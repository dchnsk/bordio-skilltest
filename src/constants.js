export const AppColors = {
    theme: {
        backgorund: {
            primary: '#0F1D40',
            highlight: '#2D4071',
            light: '#ffff',
            dark: '#F5F8FA',
        },
        text: {
            light: '#fff',
            dark: '#222222',
            inactive: '#8C939F',
        },
        active: '#0094FF',
    },
};

export const workSpaceData = {
    profile: {
        name: 'Check Check',
        img: 'https://media.istockphoto.com/id/1365310330/photo/excited-young-indian-man-winner-using-smartphone-isolated-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=JwrK0kALlICrfSwxI_2OEVLbrsIh7Igg4L3RijPLo7U=',
    },
};

export const KanbanBoardData = {
    columns: [
        {
            id: 0,
            title: 'New task',
            rows: [
                { id: 0, title: 'Check email', isCompleted: false, deadline: '0:02h' },
                {
                    id: 1,
                    title: 'Compare PPC agencies and make a report for Steven',
                    isCompleted: false,
                    deadline: '0:20h',
                },
                { id: 2, title: 'Meeting with Amanda (PR deparment)', isCompleted: false, deadline: '0:12h' },
                { id: 3, title: 'Phone mom', isCompleted: false, deadline: '0.13h' },
            ],
        },
        {
            id: 1,
            title: 'Scheduled',
            rows: [
                { id: 0, title: 'Check email', isCompleted: false, deadline: '0:02h' },
                {
                    id: 1,
                    title: 'Compare PPC agencies and make a report for Steven',
                    isCompleted: false,
                    deadline: '0:20h',
                },
            ],
        },
        {
            id: 2,
            title: 'In progress',
            rows: [{ id: 2, title: 'Meeting with Amanda (PR deparment)', isCompleted: false, deadline: '0:12h' }],
        },
        { id: 3, title: 'Completed', rows: [{ id: 0, title: 'Phone mom', isCompleted: true, deadline: '0.13h' }] },
    ],
};
