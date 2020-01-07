import React from 'react';
import { RouteProps } from "react-router";
import Units from './pages/Units';

const routes : RouteProps[] = [
    {path : '/test', component : ()=><>test</>},
    {path : '/units', component : Units},
    {path : '/' , component : ()=> <>Home</>}
]

export default routes;