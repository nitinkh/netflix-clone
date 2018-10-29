import { combineReducers } from 'redux'
import GenreReducer from './genre_reducer'
import ConfigurationReducer from './configuration_reducer'
import ShowItemsReducer from './show-item_reducer'

const rootReducer = combineReducers({
    genre: GenreReducer,
    configuration: ConfigurationReducer,
    showsitems: ShowItemsReducer
})

export default rootReducer
