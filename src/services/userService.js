import {apiService} from "./apiService";

import {urls} from "../configs";


const UserService = {
    create:(user)=>apiService.post(urls.user, user)
}

export {
    UserService
}