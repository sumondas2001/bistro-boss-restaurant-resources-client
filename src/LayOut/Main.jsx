import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Footer/NavBar/NavBar";

const Main = () => {
     const location = useLocation();
     const isLoginRoute = location.pathname.includes("login");

     return (
          <div className="max-w-7xl mx-auto">

               {isLoginRoute || <NavBar />}

               <Outlet />
               {isLoginRoute || <Footer />}

          </div>
     );
};

export default Main;