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
            icon : '',
        },
        {
            name : "Test 1",
            url : "/test1",
            icon : "",
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
            name : "Tanıtımlar",
            url : "/definitions",
            icon : ""
        }
    ]
};