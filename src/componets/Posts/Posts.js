import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postServices} from "../../services";
import {postAction} from "../../redux";
import {Post} from "../Post/Post";


const Posts = () => {

    const {posts, errors, loading} = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(postAction.getAll())
   }, [])


    return(
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading!</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}


export {Posts};