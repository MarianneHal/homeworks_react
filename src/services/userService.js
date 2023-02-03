import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";


const userService ={
    getAll:() => axiosService.get(urls.users)
}

export {userService}