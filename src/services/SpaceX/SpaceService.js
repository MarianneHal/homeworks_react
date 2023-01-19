import axios from "axios";



const axiosSpace = axios.create({baseURL:'https://api.spacexdata.com'})

const getSpace = () => {
    return axiosSpace.get('v3/launches')
};


export {
    axiosSpace,
    getSpace
}