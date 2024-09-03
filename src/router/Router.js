import { createBrowserRouter } from "react-router-dom";
 
import Home from '../pages/Home/Home'
import Main from "../layout/Main";
import User from '../pages/AdminDashboard/User';
import Categories from "../pages/Categories/Indoors";
import Dashboard from "../pages/AdminDashboard/Dashboard";

import Shop from "../pages/Shop/Shop";
import Indoor from "../pages/Indoor/Indoor";
import AddProduct from "../pages/AdminDashboard/AddProduct";
import ManageProducts from "../pages/AdminDashboard/ManageProducts";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import ThankYou from "../pages/Thankyou/ThankYou";
import OrderSummary from "../pages/OrderSummary/OrderSummary";
 
import OrderEdit from "../pages/AdminDashboard/OrderEdit";
import ManageOrders from "../pages/AdminDashboard/MangeOrders";

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
                    path:'addproducts',
                    element:<AddProduct></AddProduct>
                },
                {
                    path:'users',
                    element:<User></User>
                },
                {
                    path:'shop',
                    element:<Shop></Shop>
                },
                {
                    path:'Indoor',
                    element:<Indoor></Indoor>
                },
                {
                    path:'products',
                    element:<ManageProducts></ManageProducts>
                },
                {
                    path:'cart',
                    element:<Cart></Cart>
                },
                {
                    path:'checkout',
                    element:<Checkout></Checkout>
                },
                {
                    path: 'thank-you/:orderId',
                    element: <ThankYou />
                },
                {
                    path:'order-summary',
                    element:<OrderSummary></OrderSummary>
                },
                {
                    path:'adminorders',
                    element:<ManageOrders></ManageOrders>
                },
                {
                    path:'/admin/orders/:orderId/edit',
                    element:<OrderEdit></OrderEdit>
                }
           
            ]
        }
    ]
)