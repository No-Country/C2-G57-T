import { clientAxios } from "./axios";

export const tokenAuth = token =>{
    console.log('tokenaxios',token )
    if(token){
        clientAxios.defaults.headers.common['token'] = token
    }else{
        delete clientAxios.defaults.headers.common['x-auth-token']
    }

}