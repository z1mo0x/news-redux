import axios from 'axios';
import { type Dispatch } from 'redux';
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    SET_CURRENT_PAGE,
    type PostsAction,
    type Post,
} from '../types/posts';



export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        dispatch({ type: FETCH_POSTS_REQUEST });
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
        } catch (error) {
            let message = 'Unknown error';
            if (axios.isAxiosError(error) && error.message) {
                message = error.message;
            }
            dispatch({ type: FETCH_POSTS_FAILURE, payload: message });
        }
    };
};

export const setCurrentPage = (page: number): PostsAction => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});