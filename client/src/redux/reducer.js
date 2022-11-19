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
      const sortName =
        action.payload === "asc_name"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        dogs: sortName,
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
      
        const filtTemp = state.allDogs.filter((e) => {
          if (typeof e.temperament === "string") {
            return e.temperament.includes(action.payload);
          }
          if (Array.isArray(e.temperaments)) {
            let temp = e.temperaments.map((e) => e.name);
            return temp.includes(action.payload);
          }
        });
        return {
          ...state,
          dogs: filtTemp,
        };

    case FILTER_DB:
      const createdFilter =
        action.payload === "Created"
          ? state.allDogs.filter((e) => e.createInDb)
          : state.allDogs.filter((e) => !e.createInDb);

      return {
        ...state,
        dogs: createdFilter,
      };

    default:
      return state;
  }
}
