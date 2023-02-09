import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    loading: null
};


const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkApi) => {
        try {
         const {data} = await carService.getAll()
            return data
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, thunkApi) => {
        try {
            await carService.create(car);
            thunkApi.dispatch(getAll());
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkApi) => {
        try {
            await carService.deleteById(id);
            thunkApi.dispatch(getAll());
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }

);

const upDate = createAsyncThunk(
    'carSlice/upDate',
    async ({id, car}, thunkApi) => {
        try {
            await carService.updateById(id, car);
            thunkApi.dispatch(getAll());
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const carSlicer = createSlice({
    name: 'carSlicer',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload

        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addDefaultCase((state, action) => {
               const [actionStatus] = action.type.split('/').slice(-1);
               state.loading = actionStatus === 'pending';
            })

});


const {reducer:carReducer, actions:{setCarForUpdate}} = carSlicer;

const carActions = {
    getAll,
    createCar,
    deleteCar,
    setCarForUpdate,
    upDate
}


export {
    carReducer,
    carActions,
}