import { createSlice } from "@reduxjs/toolkit";

const reducerVin = createSlice({
    name: 'vin',
    initialState: {
        vin: '',
        indexCar: ''
    },
    reducers: {
        setVin(state, action) {
            state.vin = action.payload
        },
        setIndexRedux(state, action) {
            state.indexCar = action.payload
        }
    }
})

export const actionVin = reducerVin.actions;

export default reducerVin;