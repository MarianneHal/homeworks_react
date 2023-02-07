import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postServices} from "../../services";


const initialState = {
    posts:[],
    selectedPost: null,
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await postServices.getAll();
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getBYId',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await postServices.getById(id)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice(
    {
        name: 'postSlice',
        initialState,
        reducers: {
            setSelectedPost: (state, action) => {
                state.selectedPost = action.payload
            }
        },
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state,action) => {
                    state.loading = false
                    state.posts = action.payload
                })
                .addCase(getAll.rejected, (state,action) => {
                    state.loading = false
                    state.errors = action.payload
                })
                .addCase(getAll.pending, (state, action) => {
                    state.loading = true
                })
                .addCase(getById.fulfilled, (state,action) => {
                    state.loading = false
                    state.selectedPost = action.payload
                })
                .addCase(getById.rejected, (state, action) => {
                    state.loading = false
                    state.errors = action.payload
                })
                .addCase(getById.pending, (state, action) => {
                    state.loading = true
                })
    }
);

const {reducer:postReducer, actions:{setSelectedPost}} = postSlice;

const postAction = {
    getAll,
    getById,
    setSelectedPost
}

export {
    postAction,
    postReducer
}