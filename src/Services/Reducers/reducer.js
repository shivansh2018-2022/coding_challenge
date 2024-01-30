// reducer.js
import { AUTHENTICATE_USER } from '../Actions/actions';

const initialState = {
  isAuthenticated: false,
  authorizationCode: null,
  username: null,
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

export default authReducer;
