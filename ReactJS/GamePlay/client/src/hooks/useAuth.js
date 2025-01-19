import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../components/context/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const {password: _, ...authData} = await login(email, password);
        
        changeAuthState(authData);
    };

    return loginHandler
};

export const useRegister = () => {
    const {changeAuthState} = useAuthContext();

    const registerHandler = async (email, username, password ) => {
        const {password: _, ...authData} = await register(email, username, password);

        
        changeAuthState(authData);
    };

    return registerHandler

};

const a = 5;

// export const useLogOut = () => {
//     const { logout: localLogOut } = useAuthContext();

//     const logoutHandler = async () => {
//         await logout();
//         localLogOut();
        
//     };

//     return logoutHandler;
// };