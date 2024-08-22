import { createBrowserRouter } from "react-router-dom";
 
import Home from '../pages/Home/Home'
import Categories from "../pages/Categories/Categories";
import Dashboard from "../pages/AdminDashboard/Dashboard";
import Products from "../pages/AdminDashboard/Products";

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
                }
           
            ]
        }
    ]
)