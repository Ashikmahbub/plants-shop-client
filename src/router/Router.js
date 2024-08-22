import { createBrowserRouter } from "react-router-dom";
 
import Home from '../pages/Home/Home'
import Main from "../layout/Main";
import User from '../pages/AdminDashboard/User';
import Categories from "../pages/Categories/Indoors";
import Dashboard from "../pages/AdminDashboard/Dashboard";
import Products from "../pages/AdminDashboard/Products";
import Shop from "../pages/Shop/Shop";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>

                },
 
                {
                    path:'categories',
                    element:<Categories></Categories>
                },
                {
                    path:'dashboard',
                    element:<Dashboard></Dashboard>
                },
                {
                    path:'products',
                    element:<Products></Products>
                },
                {
                    path:'users',
                    element:<User></User>
                },
                {
                    path:'shop',
                    element:<Shop></Shop>
                }
           
            ]
        }
    ]
)