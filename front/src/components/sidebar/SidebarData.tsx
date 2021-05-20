import icon1 from '../../assets/icon_arrow1.png';
import icon2 from '../../assets/icon_arrow2.png';

export const SidebarData = [
    {
        title: "Minhas Listas",
        icon: icon1,
        iconClosed: icon1,
        iconOpened: "+",
        subNav: [
            {
                title: "Lista1",
                path: "/lista/lista-1",
                icon: icon2, 
            },
            {
                title: "Lista2",
                path: "/lista/lista-2",
                icon: icon2, 
            },
            {
                title: "Lista3",
                path: "/lista/lista-3",
                icon: icon2, 
            },
        ]
    }
]