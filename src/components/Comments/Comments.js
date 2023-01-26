import React from 'react';
import {Link} from "react-router-dom";

const Comments = ({comment}) => {
    return (
        <div>
                    <div>{comment.id}</div>
                    <div>{comment.name}</div>
                    <div>{comment.body}</div>

                    <button><Link to={comment.postId.toString()}>Post info</Link></button>
        </div>
    );
};

export {Comments};