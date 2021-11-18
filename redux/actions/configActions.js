import { getConfig } from "../../config/index"
import axios from "axios"

export const LOAD_CONFIG = 'LOAD_CONFIG'

const {API_URL} = getConfig()
export const loadConfig = () => {
    return async (dispatch) => {
        return axios.get(`${API_URL ? API_URL : "http://localhost:8000/api" }/config?name=default`).then((res) => {
            dispatch({
                type: LOAD_CONFIG,
                payload: { ...res.data }
            })
        })
    };
}
    
    

