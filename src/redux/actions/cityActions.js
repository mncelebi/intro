import * as actionTypes from "./actionTypes";

export function getCitiesSuccess(cities) {
    return { type: actionTypes.GET_CITIES_SUCCESS, payload: cities};
  }

  
export function getCities(cityId) {
    return function(dispatch) {
  
      let url = "http://localhost:3001/cities";
  
      if (cityId) {
          url += "?cityId=" + cityId;
        }
  
      return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getCitiesSuccess(result)));
    };
  }
