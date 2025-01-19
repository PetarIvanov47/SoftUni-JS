import { Navigate } from "react-router-dom";
import { logout } from "../../api/auth-api";
import { useAuthContext } from "../context/AuthContext";

export default function Logout(){
    const { logout: localLogOut} = useAuthContext();
    localLogOut();

    const logOutHandler = async () => {
        await logout();
    };

    logOutHandler();

    return (
        <Navigate to='/'/>
    );
}