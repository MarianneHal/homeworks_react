import React from 'react';

const Album = ({album}) => {
    return (
        <div>
            <div>{album.id}</div>
            <div>{album.title}</div>
        </div>
    );
};

export {Album};