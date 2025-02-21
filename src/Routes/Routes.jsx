import {
     createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Dashboard from "../LayOut/Dashboard";
import Card from "../Pages/Dashboard/Card/Card";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateMenu from "../Pages/Dashboard/UpdateMenu/UpdateMenu";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          children: [

               {
                    path: '/',
                    element: <Home />
               },
               {
                    path: '/Our-menu',
                    element: <Menu />
               },

               {
                    path: 'order/:category',
                    element: <Order />
               },
               {
                    path: '/login',
                    element: <Login />
               },
               {
                    path: '/singUp',
                    element: <SingUp />
               },
               {
                    path: '/secret',
                    element: <PrivateRoutes>
                         <Secret />
                    </PrivateRoutes>
               }
          ]
     },
     {
          path: 'dashboard',
          element: <PrivateRoutes>
               <Dashboard />
          </PrivateRoutes>,
          children: [
               // normal user routes
               {
                    path: 'my-cart',
                    element: <Card />
               },
               {
                    path: 'payment',
                    element: <Payment />
               },
               {
                    path: 'payment-history',
                    element: <PaymentHistory />
               },
               // admin only routes
               {
                    path: 'all-users',
                    element: <AdminRoutes> <AllUsers /></AdminRoutes>
               },
               {
                    path: 'add-items',
                    element: <AdminRoutes><AddItems /></AdminRoutes>
               },
               {
                    path: 'manage-items',
                    element: <AdminRoutes><ManageItems /></AdminRoutes>
               },
               {
                    path: 'update-menu/:id',
                    element: <AdminRoutes><UpdateMenu /></AdminRoutes>


               }
          ]
     }
]);