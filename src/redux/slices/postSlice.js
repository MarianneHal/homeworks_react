import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null

};

const postSlice = createSlice(
    {
        name: 'postSlice',
        initialState,
        reducers: {
            getAll: (state, action) => {
                state.posts = action.payload
            },
            setSelectedPost: (state, action) => {
                state.selectedPost = action.payload
            }
        }
    }
);

const {reducers:postReducer, actions:{getAll, setSelectedPost}} = postSlice;

const postAction = {
    getAll,
    setSelectedPost
}

export {
    postAction,
    postReducer
}