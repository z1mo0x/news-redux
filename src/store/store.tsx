import { combineReducers } from 'redux';
import { postsReducer } from './reducers/postsReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;