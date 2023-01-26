import React, {useEffect, useState} from 'react';

import {getService} from "../../services";


const Post = ({postId}) => {

    const [post, setPost] = useState(null)
    useEffect(()=> {
        getService.getPostsById(postId).then(({data}) => setPost(data))
    },[])

    return (
        <div>
            {post &&
                <>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </>
                }
        </div>
    );
};

export {Post};