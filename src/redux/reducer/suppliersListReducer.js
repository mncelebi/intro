import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function suppliersListReducer(state=initialState.suppliers,action){
    switch (action.type) {
        case actionTypes.GET_SUPPLIERS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}