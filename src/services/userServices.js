import {axiosServices} from "./axiosServices";

import {urls} from "../configs";


const userServices = {
    getAll: () => axiosServices.get(urls.users),
    getById: (id) =>axiosServices.get(`${urls.users}/${id}`)
}

export {userServices};
