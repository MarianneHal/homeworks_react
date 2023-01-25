import {axiosService} from "./axiosService";
import {urls} from "../configs";


let commentsService = {
        getAll:() => axiosService.get(urls.comments),
        create:(newComment) => axiosService.post(urls.comments, newComment),
        updateById:(id, data) => axiosService.put('${urls.comments}/${id}', data),
        deleteById:(id) => axiosService.delete('${urls.comments}/${id}')
   }

   export {commentsService}