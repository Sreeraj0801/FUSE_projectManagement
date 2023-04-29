import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: ''
};

export const themeSlice = createSlice({
    name: "taskUpdate",
    initialState,
    reducers: {
        setTaskStatus: (state, action) => {
            const { status } = action.payload;
            state.status = status
        }
    },
});

export const { setTaskStatus } = themeSlice.actions;
export default themeSlice.reducer;

export const taskReducer = (state) => state.persistedReducer?.taskReducer;
