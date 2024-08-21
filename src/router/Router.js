import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Categories from "../pages/Categories";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,

                },
                {
                    path:'products',
                    element:<ProductList></ProductList>
                },
                {
                    path:'categories',
                    element:<Categories></Categories>
                }
            ]
        }
    ]
)