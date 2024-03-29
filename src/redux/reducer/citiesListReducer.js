import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function citiesListReducer(state=initialState.cities,action){
    switch (action.type) {
        case actionTypes.GET_CITIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}