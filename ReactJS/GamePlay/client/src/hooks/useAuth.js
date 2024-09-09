import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../components/context/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {

        const result = await login(email, password);
        
        console.log(result);
        changeAuthState(result);

    };

    return loginHandler
};

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email, username, password ) => {
        const result = await register(email, username, password);

        console.log((result));
        changeAuthState(result);
    };

    return registerHandler

};