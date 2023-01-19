import {axiosService} from "./axiosService";


const getUsers = () => {
    return axiosService.get('/users')
};

const getUser = (id) => {
    return axiosService.get('/users/' + id)
}

const getPosts = (id) => {
    return axiosService.get('/users/' + id + '/posts')
}

export {
    getUser,
    getUsers,
    getPosts
}