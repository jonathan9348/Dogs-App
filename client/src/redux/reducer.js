import {
  GET_DOGS,
  DOGS_DETAILS,
  SEARCH_DOG,
  GET_TEMPERAMENT,
  CREATE_DOG,
  ORDER_ALF,
  ORDER_WEIGTH,
  FILTER_DB,
  FILTER_TEMP,
} from "./actions";

const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  details: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case DOGS_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case SEARCH_DOG:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_TEMPERAMENT:
      return {
        ...state,
        temperaments: action.payload,
      };

    case CREATE_DOG:
      return {
        ...state,
      };

    case ORDER_ALF:
      let alfOrder =
        action.payload === "asc_name"
          ? state.dogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });
      return {
        ...state,
        dogs: alfOrder,
      };

    case ORDER_WEIGTH:
      let weightOrder =
        action.payload === "asc_weight"
          ? state.dogs.sort((a, b) => {
              if (parseInt(a.weightMin) < parseInt(b.weightMin)) return -1;
              if (parseInt(a.weightMin) > parseInt(b.weightMin)) return 1;
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (parseInt(a.weightMin) > parseInt(b.weightMin)) return -1;
              if (parseInt(a.weightMin) < parseInt(b.weightMin)) return 1;
              return 0;
            });
      return {
        ...state,
        dogs: weightOrder,
      };

    case FILTER_TEMP:
      const allDogs = state.allDogs; //state.recipes
      const typesFiltered =
        action.payload === "All"
          ? allDogs
          : allDogs.filter(
              (el) =>
                el.temperaments.includes(action.payload) ||
                el.temperaments.map((el) => el.name).includes(action.payload)
            );
      return {
        ...state,
        dogs: typesFiltered,
      };

    case FILTER_DB:
      const createdFilter =
        action.payload === "Created"
          ? state.allDogs.filter((e) => e.createdInDb)
          : state.allDogs.filter((e) => !e.createdInDb);

      return {
        ...state,
        dogs: createdFilter,
      };

    default:
      return state;
  }
}
