import {
    ADD_TO_FAVORITES,
    GET_REPOSITORIES,
    GET_REPOSITORIES_FAILED,
    GET_REPOSITORIES_SUCCESS, REMOVE_FROM_FAVORITES
} from "../constants/github.constant";

const GITHUB_INITIAL_STATE = {
    loading: false,
    repositories: [],
    error: null
}

export const githubReducer = (state = GITHUB_INITIAL_STATE, action) => {
    if(!action) {
        return state;
    }
    switch (action.type) {
        case GET_REPOSITORIES:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                repositories: action.payload,
                error: null
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                repositories: state.repositories.map(val => {
                    return {
                        ...val,
                        starred: val.id === action.payload ? true : val.starred
                    }
                })
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                repositories: state.repositories.map(val => {
                    return {
                        ...val,
                        starred: val.id === action.payload ? false : val.starred
                    }
                })
            }
        case GET_REPOSITORIES_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}