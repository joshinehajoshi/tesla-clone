import { createSlice } from '@reduxjs/toolkit';

const initialSate = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialSate,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer