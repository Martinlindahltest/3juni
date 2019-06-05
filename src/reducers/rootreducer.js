import projektReducer from './projektReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    project: projektReducer

})

export default rootReducer