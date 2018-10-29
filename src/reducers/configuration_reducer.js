import { FETCH_CONFIGURATION } from '../actions/index'

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_CONFIGURATION:
            return { ...state, ...action.payload.data }
        default:
            return state
    }
}
