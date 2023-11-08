
import {  useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";






const PrivateRoute = ({children}) => {
    const {User,reload}=useContext(AuthContext)
    const location=useLocation()

    
    if(reload)
    {
        return <><span className="loading loading-spinner loading-lg flex mx-auto my-40 justify-center items-center"></span></>
    }
    if(User){
        return children;
    }
    return <Navigate state={location.pathname}  to="/login"></Navigate>
};

export default PrivateRoute;