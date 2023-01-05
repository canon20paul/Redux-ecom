import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import cartReducer from './cartReducer'
import itemsReducer from './itemReducer'

const rootReducer = combineReducers({
    itemsReducer : itemsReducers,
    cartReducer: cartReducer
})