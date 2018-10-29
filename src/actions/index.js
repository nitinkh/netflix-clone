import axios from 'axios'

const API_KEY = 'ffc2340300f9c23d6de9af3b45c70c50'
const ROOT_URL = 'https://api.themoviedb.org/3/'

export const FETCH_GENRE = 'FETCH_GENRE'
export const FETCH_CONFIGURATION = 'FETCH_CONFIGURATION'
export const FETCH_SHOWITEMS = 'FETCH_SHOWITEMS'

export function fetchGenre() {
    const url = `${ROOT_URL}genre/movie/list?api_key=${API_KEY}`
    return dispatch => {
        axios.get(url).then(response => {
            dispatch({
                type: FETCH_GENRE,
                payload: response
            })
            if (response.data.genres.length > 0) {
                const id = response.data.genres[0].id
                dispatch(fetchItemsById(id))
            }
        })
    }
}

export function fetchItemsById(id) {
    const url = `${ROOT_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}`

    return dispatch => {
        return axios.get(url).then(response => {
            dispatch({
                type: FETCH_SHOWITEMS,
                payload: response
            })
        })
    }
}

export function fetchItemsBySearchTerm(searchTerm) {
    const url = `${ROOT_URL}search/movie?api_key=${API_KEY}&page=1&query=${searchTerm}`

    return dispatch => {
        return axios.get(url).then(response => {
            dispatch({
                type: FETCH_SHOWITEMS,
                payload: response
            })
        })
    }
}

export function fetchConfiguration() {
    const url = `${ROOT_URL}configuration?api_key=${API_KEY}`

    return dispatch => {
        return axios.get(url).then(response => {
            dispatch({
                type: FETCH_CONFIGURATION,
                payload: response
            })
            dispatch(fetchGenre())
        })
    }

    // const request = axios.get(url);
    // return {
    //     type: FETCH_CONFIGURATION,
    //     payload: request
    // }
}
