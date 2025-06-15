import React from 'react';
import { createBrowserRouter } from 'react-router';
import Main from '../Layouts/Main';
import Home from '../Pages/Home';
import Products from '../Pages/Sections/Products';
import AddEquipment from '../Pages/AddEquipment';
import AllEquipmnt from '../Pages/AllEquip/AllEquipmnt';
import AuthLayOut from '../Layouts/AuthLayOut';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ViweDetails from '../Components/ViweDetails';
import PrivetRoutes from './PrivetRoutes';
import MyEquipment from '../Components/MyEquipment';
import ErrorPage from '../Components/ErrorPage';

const Routes =createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://sportfolio-d0367.web.app/products')
                
            },
            {
                path: '/produnt/add',
                element: <PrivetRoutes> <AddEquipment></AddEquipment></PrivetRoutes>
            },
            {
                path: '/allEquip',
                element: <AllEquipmnt></AllEquipmnt>,
                 loader: ()=> fetch('https://sportfolio-d0367.web.app/products')
            },
            {
                path: '/myEquip',
                element : <PrivetRoutes> <MyEquipment></MyEquipment></PrivetRoutes>
            },
           {
                path: 'allEquip/viweDetails/:id',
              element: <PrivetRoutes> <ViweDetails></ViweDetails> </PrivetRoutes>,
                loader: ({params}) => fetch(`https://sportfolio-d0367.web.app/products/${params.id}`)
            },
            {
                path: '/viweDetails/:id',
                element: <PrivetRoutes> <ViweDetails></ViweDetails> </PrivetRoutes>,
                loader: ({params}) => fetch(`https://sportfolio-d0367.web.app/products/${params.id}`)
            }
        ]
    },
      {
        path: '/auth',
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
           {
            path: '/auth/register',
            element: <Register></Register>
           }
        ]
    },
    
])

export default Routes;