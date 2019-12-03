export default {
    items: [
        {
            name: 'Home',
            url: '/',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
        {
            name: 'Yunus',
            url: '/yunus',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
        {
            name : 'Tanımlamalar',
            url : '/definitions',
            icon : 'icon-speedometer'
        }
    ],
    menu : [
        {
            name : 'Ana Sayfa',
            url : '/',
            icon: 'desktop',
        },
        {
            name : "Test 1",
            url : "/test1",
            icon : "user",
            items : [
                {
                    name: "Test 1.1",
                    url: "/yunus",
                    icon: ""
                },{
                    name: "Test 1.2",
                    url: "/test12",
                    icon: "",
                }
            ]
        },
        {
            name : "Daire Yönetimi",
            url : "/definitions",
            icon : "team"
        }
    ]
};