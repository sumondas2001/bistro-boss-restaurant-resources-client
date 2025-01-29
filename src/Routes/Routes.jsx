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
]);