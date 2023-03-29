import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name:'',
    email:'',
    mobile:'',
}

export const userSlice = createSlice({
    name:"userDetailis",
    initialState,
    reducers:{
        setDetails:(state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.mobile = action.payload.mobile;
        }
    }
})

export const {setDetails} = userSlice.actions
export default userSlice.reducer ;

export const selectUserSlice = (state) => state.userReducer;