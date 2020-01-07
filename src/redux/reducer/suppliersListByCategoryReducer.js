import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function suppliersListByCategoryReducer(state=initialState.suppliers,action){
    switch (action.type) {
        case actionTypes.GET_SELECTCATEGORIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}