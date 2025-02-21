import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
     const { user, loading } = useAuth();
     const [iaAdmin, isAdminLoading] = useAdmin();
     const location = useLocation();
     if (loading || isAdminLoading) {
          return <h1 className="text-lg ">Loading.......</h1>
     };
     if (user && iaAdmin) {
          return children
     }

     return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default AdminRoutes;