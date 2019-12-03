import React from 'react'
import DefinitionsPage from "./pages/definitions";
const Home = ()=><div>Home</div>;

const Yunus = () => <div>Yunus</div>

const routes = [
    { path : '/yunus', name: "Yunus" , component: Yunus},
    { path : '/dashboard', name: "Dashboard" , component: Home},
    { path : '/definitions', name : "Tanımlamalar", component : DefinitionsPage},
    { path : '/', name: "Anasayfa" , component: Home}
];

export default routes;