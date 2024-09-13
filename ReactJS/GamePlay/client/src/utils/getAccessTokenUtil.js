export default function(){
    const userData = JSON.parse(localStorage.getItem('auth'));

    if(!userData){
        return 
    }
    
    return userData.accessToken;
};