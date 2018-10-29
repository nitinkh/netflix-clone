import { FETCH_SHOWITEMS } from '../actions/index'

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SHOWITEMS:
            return [...action.payload.data.results]
        default:
            return state
    }
}
