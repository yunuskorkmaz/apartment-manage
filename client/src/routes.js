import React from 'react'
const Home = ()=><div>Home</div>;

const Yunus = () => <div>Yunus</div>

const routes = [
    { path : '/yunus', name: "Yunus" , component: Yunus},
    { path : '/dashboard', name: "Dashboard" , component: Home},
    { path : '/', name: "Anasayfa" , component: Home},
]

export default routes;