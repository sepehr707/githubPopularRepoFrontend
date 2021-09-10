import {
    ADD_TO_FAVORITES,
    GET_REPOSITORIES,
    GET_REPOSITORIES_FAILED,
    GET_REPOSITORIES_SUCCESS, REMOVE_FROM_FAVORITES
} from "../constants/github.constant";
import {mapGithubRepoData} from '../../utils'
export const getRepositories = () => {
    return {
        type: GET_REPOSITORIES
    }
}

export const getRepositoriesSuccess = (repositories) => {
    try {
        return {
            type: GET_REPOSITORIES_SUCCESS,
            payload: repositories.map(mapGithubRepoData)
        }
    } catch (error) {
        return getRepositoriesFailed('Invalid Data');
    }
}

export const getRepositoriesFailed = (message) => {
    const errorMessage = typeof message === 'string' ? message : 'Error Occurred'
    return {
        type: GET_REPOSITORIES_FAILED,
        payload: errorMessage
    }
}

export const addToFavorites = (id) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: id
    }
}

export const removeFromFavorites = (id) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: id
    }
}