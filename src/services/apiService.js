import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./authService";



const history = createBrowserHistory()
const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config)=>{
    if (authService.isAuthenticated) {
        const access = authService.getAccessToken();
        config.headers.Authorization = 'Bearer ${access}'
    }
    return config
});

let isRefreshing = false;

apiService.interceptors.response.use((config)=> {
    return config
}, async (errors) => {
    const refresh = authService.getRefreshToken();

    if (errors.response?.status === 401 && refresh && !isRefreshing) {
        isRefreshing = true
        try{
            await authService.refresh(refresh)
        } catch (e) {
            authService.deleteTokens()
            history.replace('/login?expSession=true')
        }
        isRefreshing = false;
        return apiService(errors.config)
    }
        return Promise.reject(errors)
        })

export {
    apiService,
    history
}