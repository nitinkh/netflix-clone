import { FETCH_GENRE } from '../actions/index'

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_GENRE:
            return [...state, ...action.payload.data.genres]
        default:
            return state
    }
}
