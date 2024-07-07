import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({allowedRole}) => {

    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    
    if(!token){
        return <Navigate to="/login"/>
    }

    // eslint-disable-next-line react/prop-types
    if(!allowedRole.includes(role)){
        return <Navigate to="/login"/>
    }

    return <Outlet/>
}

export default PrivateRoute;