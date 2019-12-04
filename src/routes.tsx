import React from 'react';
import { RouteProps } from "react-router";

const routes : RouteProps[] = [
    {path : '/test', component : ()=><>test</>},
    {path : '/' , component : ()=> <>Home</>}
]

export default routes;