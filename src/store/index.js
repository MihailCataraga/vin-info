import { configureStore } from '@reduxjs/toolkit';
import reducerVin from './vin';

const store = configureStore({
    reducer: {
        vin: reducerVin.reducer
    }
})

export default store;