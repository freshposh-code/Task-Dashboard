import { AvTimer, ChatRounded, Home, ModeComment, ShowChart, Wallet } from '@mui/icons-material';

export const sidebarIcons = [
    {
        icon: <Home style={{ fontSize: '30px' }} />
    },
    {
        icon: <AvTimer style={{ fontSize: '30px' }} />
    },
    {
        icon: <ModeComment style={{ fontSize: '30px' }} />
    },
    {
        icon: <Wallet style={{ fontSize: '30px' }} />
    },
];

export const topContent = [
    {
        link: 'Feedback'
    },
    {
        link: 'Contact'
    },
    {
        link: 'Help'
    },
]

export const stats = [
    {
        icon: <ShowChart style={{ fontSize: '50px' }} />,
        text: `VISITORS`,
        number: `10,320`
    },
    {
        icon: <ShowChart style={{ fontSize: '50px' }} />,
        text: `CUSTOMERS`,
        number: `4,628`
    },
    {
        icon: <ShowChart style={{ fontSize: '50px' }} />,
        text: `ORDERS`,
        number: `2,980`
    },
]