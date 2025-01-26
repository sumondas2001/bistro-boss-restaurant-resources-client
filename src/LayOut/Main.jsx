import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Footer/NavBar/NavBar";

const Main = () => {
     return (
          <div className="max-w-7xl mx-auto">
               <NavBar />
               <Outlet />
               <Footer />
          </div>
     );
};

export default Main;