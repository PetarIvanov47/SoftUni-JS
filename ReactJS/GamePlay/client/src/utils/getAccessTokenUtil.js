import { json } from "react-router-dom";

export default function(){
    const userData = JSON.parse(localStorage.getItem('auth'));

    return userData.accessToken;
};