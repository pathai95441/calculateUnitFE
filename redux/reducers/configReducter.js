import { LOAD_CONFIG } from '../actions/configActions'

const initialState = {
    name: "test",
    unit101_150: 1,
    unit151_400: 1,
    unit401: 1,
}

const configReducter = (state = initialState, action) => {
    switch(action.type){
        case LOAD_CONFIG:
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default configReducter