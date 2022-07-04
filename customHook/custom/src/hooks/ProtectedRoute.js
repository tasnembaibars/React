import UseLogIn from "./UseLogIn";
import {Outlet} from 'react-router-dom';
import {useLocation} from 'react-router';
const useAuth=()=>{
    const user ={loggedin:false}
    return user && user.loggedin;
}
const ProtectedRoute=()=>{
    const location = useLocation()
    const isAuth=useAuth();
    return isAuth?<Outlet/>:<UseLogIn replace state={{from:location}}/>;
}
export default ProtectedRoute;