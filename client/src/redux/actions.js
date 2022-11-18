import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const DOGS_DETAILS = "DOGS_DETAILS";
export const SEARCH_DOG = "SEARCH_DOG";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const CREATE_DOG = "CREATE_DOG";
export const ORDER_ALF = "ORDER_ALF";
export const ORDER_WEIGTH = "ORDER_WEIGTH";
export const FILTER_DB = "FILTER_DB";
export const FILTER_TEMP = "FILTER_TEMP";

export function getDogs() {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/dogs");

    return dispatch({
      type: GET_DOGS,
      payload: data,
    });
  };
}

export function dogsDetails(id) {
  return async (dispatch) => {
    const dogId = await axios.get(`http://localhost:3001/dogs/${id}`);

    return dispatch({
      type: DOGS_DETAILS,
      payload: dogId.data,
    });
  };
}

export function searchDog(name) {
  return async (dispatch) => {
    try {
      const dogName = await axios.get(
        `http://localhost:3001/dogs?name=${name}`
      );

      return dispatch({
        type: SEARCH_DOG,
        payload: dogName.data,
      });
    } catch (err) {
      alert("No name found");
    }
  };
}

export function getTemperaments() {
  return async (dispatch) => {
    const temperament = await axios.get("http://localhost:3001/temperaments");

    return dispatch({
      type: GET_TEMPERAMENT,
      payload: temperament.data,
    });
  };
}

export function createDog(payload) {
  return async (dispatch) => {
    const postDog = await axios.get(
      "http://localhost:3001/dogs",
      payload
    );

    return postDog;
  };
}

export function orderAlf(order) {
  return {
    type: ORDER_ALF,
    payload: order,
  };
}

export function orderWeigth(order) {
  return {
    type: ORDER_WEIGTH,
    payload: order,
  };
}

export function filterDb(type) {
  return {
    type: FILTER_DB,
    payload: type,
  };
}

export function filterTemp(type) {
  return {
    type: FILTER_TEMP,
    payload: type,
  };
}
