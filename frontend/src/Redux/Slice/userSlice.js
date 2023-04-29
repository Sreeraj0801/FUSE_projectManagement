import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    userId: '',
    accessToken: ''
}

export const userSlice = createSlice({
    name: "userDetailis",
    initialState,
    reducers: {
        setDetails: (state, action) => {
            // state = { ...state, ...action.payload }
     const { userId, name, email, accessToken } = action.payload;
      state.userId = userId !== undefined ? userId : state.userId;
      state.name = name !== undefined ? name : state.name;
      state.email = email !== undefined ? email : state.email;
      state.accessToken = accessToken !== undefined ? accessToken : state.accessToken;
        }
    }
})

export const { setDetails } = userSlice.actions
export default userSlice.reducer;

export const userReducer = (state) => state.persistedReducer?.userReducer;