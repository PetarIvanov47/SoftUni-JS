import { Navigate } from "react-router-dom";
import { useLogOut } from "../../hooks/useAuth";

export default function Logout(){
    const logout = useLogOut();
    logout();

    return (
        <Navigate to='/'/>
    );
}