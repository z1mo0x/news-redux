export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST' as const;
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS' as const;
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE' as const;

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export interface SetCurrentPageAction {
    type: typeof SET_CURRENT_PAGE;
    payload: number;
}

export interface FetchPostsRequestAction {
    type: typeof FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessAction {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: Post[];
}

export interface FetchPostsFailureAction {
    type: typeof FETCH_POSTS_FAILURE;
    payload: string;
}


export type PostsAction =
    | FetchPostsRequestAction
    | FetchPostsSuccessAction
    | FetchPostsFailureAction
    | SetCurrentPageAction;

export interface PostsState {
    loading: boolean;
    posts: Post[];
    currentPage: number,
    postsPerPage: number,
    error: string | null;
}