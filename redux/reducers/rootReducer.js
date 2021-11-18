import {combineReducers} from 'redux'
import configReducter from './configReducter'

const rootReducer = combineReducers({
    config: configReducter
})

export default rootReducer