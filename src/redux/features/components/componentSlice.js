import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    components: [
        {
            "_id": "64c6033596e81aad4abf81f0",
            "name": "CPU / Processor"
        },
        {
            "_id": "64c6033596e81aad4abf81f1",
            "name": "Motherboard"
        },
        {
            "_id": "64c6033596e81aad4abf81f2",
            "name": "RAM"
        },
        {
            "_id": "64c6033596e81aad4abf81f3",
            "name": "Power Supply Unit"
        },
        {
            "_id": "64c6033596e81aad4abf81f4",
            "name": "Storage Device"
        },
        {
            "_id": "64c6033596e81aad4abf81f5",
            "name": "Monitor"
        }
    ],
    componentCount: 0,
};

export const componentSlice = createSlice({
    name: "component",
    initialState,
    reducers: {
        setComponents: (state, action) => {
            state.components = action.payload;
        },
        addProduct: (state, action) => {
            state.components = state.components.filter((item) => item.name !== action.payload.category);

            state.componentCount += 1;

            state.components.push(action.payload);
        },
    },
});

export const { setComponents, addProduct } = componentSlice.actions;

export default componentSlice.reducer;
