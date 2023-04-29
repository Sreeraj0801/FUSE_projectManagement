import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import userReducer from './Slice/userSlice';
import themeReducer from './Slice/themeSlice';
import taskReducer from './Slice/taskSlice';

const reducers = combineReducers({
    userReducer,
    themeReducer,
    taskReducer

});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: {
        persistedReducer
    }
});