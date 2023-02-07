import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postServices} from "../../services";
import {postAction} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
       postServices.getAll().then(({data}) => dispatch(postAction.getAll(data)))
   }, [])


    return(
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}


export {Posts};