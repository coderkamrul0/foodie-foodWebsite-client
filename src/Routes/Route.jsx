import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import App from './../App';
import Shop from "../Pages/Shop/Shop";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AddAItem from "../Pages/Dashboard/AddAItem/AddAItem";
import AllFoods from "../Pages/Dashboard/AllFoods/AllFoods";
import UpdateFood from "../Pages/Dashboard/UpdateFood/UpdateFood";
import OrderHistory from "../Pages/Dashboard/OrderHistroy/OrderHistory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <App/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome/>

            },
            {
                path: '/dashboard/allFoods',
                element: <AllFoods/>

            },
            {
                path: '/dashboard/updateFood',
                element: <UpdateFood/>

            },
            {
                path: '/dashboard/addFood',
                element: <AddAItem/>

            },
            {
                path: '/dashboard/orderHistory',
                element: <OrderHistory/>

            },
        ]
    }
])

export default router;