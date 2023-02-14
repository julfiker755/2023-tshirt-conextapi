import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Granfather from '../Grandfather/Granfather';
import Layout from '../Layout/Layout';
import Tshirt from '../Tshirt/Tshirt';

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                loader:async()=>{
                  return fetch("./tshirt.json")
                },
                element:<Tshirt></Tshirt>
            },{
                path:'/granfather',
                element:<Granfather></Granfather>
            }
        ]
    },{
        path:'*',
        element:'Your page not found 404??'
    }
])

export default routes;