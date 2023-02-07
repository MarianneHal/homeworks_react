import {useDispatch} from "react-redux";

import {postAction} from "../../redux";

const Post = ({post}) => {
    const  {id, tittle, body} = post;
    const dispatch = useDispatch();
    return(
        <div>
             <div>{id}</div>
            <div>{tittle}</div>
            <div>{body}</div>
            <button onClick={()=>dispatch(postAction.setSelectedPost(post))}>SELECT</button>
            <button onClick={()=>dispatch(postAction.getById({id}))}>ApiSelect</button>
        </div>
    )
}

export {Post};