import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {getService} from "../../services";
import {Post} from "../../components";

const PostPage = () => {
    const {postId}=useParams()

    return (
        <div>
            <Post postId={postId}/>
        </div>
    );
};
export {PostPage};