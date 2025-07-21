import { type PostsState, type PostsAction, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, SET_CURRENT_PAGE } from '../types/posts';

const initialState: PostsState = {
    loading: false,
    posts: [],
    currentPage: 1,
    postsPerPage: 10,
    error: null,
};



export function postsReducer(state = initialState, action: PostsAction): PostsState {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case FETCH_POSTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state;
    }
}