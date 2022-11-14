import { GET_DOGS, DOGS_DETAILS } from "./actions"

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    details: []
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }

        case DOGS_DETAILS:
            return {
                ...state,
                details: action.payload
            }

            default:
                return state;
    }

}