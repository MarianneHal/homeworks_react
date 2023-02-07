import {axiosServices} from "./axiosServices";
import {urls} from "../configs";


const postServices = {
    getAll: () => axiosServices.get(urls.posts),
    getById: (id) =>axiosServices.get(`${urls.posts}/${id}`)
}

export {postServices};