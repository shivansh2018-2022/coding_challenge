// Reducer.js
import { AUTHENTICATE_USER, SELECT_VIEW } from "../Actions/actions";
import { tabvalues } from "../../constants";

const initialState = {
  isAuthenticated: false,
  authorizationCode: null,
  username: null,
  selectedView: tabvalues.dashboard,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        authorizationCode: action.payload.authorizationCode,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

const selectedTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VIEW:
      return {
        ...state,
        selectedView: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer, selectedTabReducer };
