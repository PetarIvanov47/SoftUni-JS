import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../components/context/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {

        const {password: _, ...authData} = await login(email, password);
        
        
        changeAuthState(authData);

    };

    return loginHandler
};

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email, username, password ) => {
        const {password: _, ...authData} = await register(email, username, password);

        
        changeAuthState(authData);
    };

    return registerHandler

};