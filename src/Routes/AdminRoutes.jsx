import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({ children }) => {
     const { user, loading } = useAuth();
     const [iaAdmin, isAdminLoading] = useAdmin();
     const location = useLocation();
     if (loading || isAdminLoading) {
          return <p>Loading.........</p>
     }
     if (user && iaAdmin) {
          return children
     }
     return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;