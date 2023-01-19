import {axiosService} from "./axiosService";


const getUsers = () => {
    return axiosService.get('/users')
};

const getUser = (id) => {
    return axiosService.get('/users/' + id)
}

export {
    getUser,
    getUsers
}