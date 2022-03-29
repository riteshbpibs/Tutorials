import { combineReducers } from "redux";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "DELETE_USER":
    case "ADD_USER":
    case "UPDATE_USER":
      return {
        ...state,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  users: userReducer,
});
