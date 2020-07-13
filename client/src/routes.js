import React from "react";
import { DesktopOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";
import UnitPage from "./pages/UnitPage";

const routes = [
	{ path: "/test", component: () => <>test</> },
	{ path: "/units", component: UnitPage },
	{ path: "/", component: () => <>Home</> },
];

export default routes;

export const menu = [
	{
		name: "Ana Sayfa",
		url: "/",
		icon: <DesktopOutlined />,
	},
	{
		name: "Test 1",
		icon: <UserOutlined />,
		items: [
			{
				name: "Test 1.1",
				url: "/test",
				icon: "",
			},
			{
				name: "Test 1.2",
				url: "/",
				icon: "",
			},
		],
	},
	{
		name: "Daire Yönetimi",
		url: "/units",
		icon: <TeamOutlined />,
	},
];
