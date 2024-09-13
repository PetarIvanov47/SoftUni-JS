export default function(){
    const authJSON = localStorage.getItem('auth');
    const authData = JSON.parse(authJSON);
    
    if(!authData){
        return '';
    }

    return authData.accessToken;
};