import { combineReducers } from "redux";
import suppliersListReducer from "./suppliersListReducer";
import categoriesListReducer from "./categoriesListReducer";
import citiesListReducer from './citiesListReducer';
import suppliersListByCategoryReducer from './suppliersListByCategoryReducer';
import suppliersListByCityReducer from './suppliersListByCityReducer'

const rootReducer = combineReducers({
  suppliersListReducer,
  categoriesListReducer,
  citiesListReducer,
  suppliersListByCategoryReducer,
  suppliersListByCityReducer
});

export default rootReducer;
