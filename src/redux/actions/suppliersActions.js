import * as actionTypes from "./actionTypes";

export function getSuppliersSuccess(suppliers){
    return {type: actionTypes.GET_SUPPLIERS_SUCCESS, payload: suppliers}
}
export function getSuppliersByCategoriesSuccess(suppliers){
  return {type: actionTypes.GET_SELECTCATEGORIES_SUCCESS, payload: suppliers}
}

export function getSuppliersByCitiesSuccess(suppliers){
  return {type: actionTypes.GET_SELECTCITIES_SUCCESS, payload: suppliers}
}

export function getSuppliers(pageId) {
    return function(dispatch) {
      let url = "https://api.evdekibakicim.com/suppliers/list";

      if (pageId) {
        url += "?page=" + pageId;
      }
  
      return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getSuppliersSuccess(result)));
    };
  }

  export function getSuppliersByCategories(categoryId) {
    return function(dispatch) {
      let url = "https://api.evdekibakicim.com/suppliers/list";

      if (categoryId) {
        url += "?categoryId=" + categoryId;
      }
  
      return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getSuppliersSuccess(result)));
    };
  }

  export function getSuppliersByCities(cityId) {
    return function(dispatch) {
      let url = "https://api.evdekibakicim.com/suppliers/list";

      if (cityId) {
        url += "?cityId=" + cityId;
      }
  
      return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getSuppliersSuccess(result)));
    };
  }