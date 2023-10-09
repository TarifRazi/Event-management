import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivatRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="text-center  loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children;
    }

    console.log(children)

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivatRoute;