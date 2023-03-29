import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    accessToken: ""
}

export const authSlice = createSlice({
    name:'authentication',
    initialState,
    reducers : {
        setAccessToken : (state,action) => {
            state.accessToken = action.payload ;
        }
    }
})

export const {setAccessToken} = authSlice.actions;

export default authSlice.reducer;

export const  selectAuthSlice = (state)=>state.authReducer ;