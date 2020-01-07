import * as actionTypes from "./actionTypes";

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories};
}



export function getCategories(categoryId) {
  return function(dispatch) {

    let url = "http://localhost:3000/categories";

    if (categoryId) {
        url += "?categoryId=" + categoryId;
      }

    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCategoriesSuccess(result)));
  };
}

