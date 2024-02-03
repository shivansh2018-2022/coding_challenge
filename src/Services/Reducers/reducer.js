// Reducer.js
import { AUTHENTICATE_USER, SELECT_VIEW } from '../Actions/actions';

const initialState = {
  isAuthenticated: false,
  authorizationCode: null,
  username: null,
  selectedView: 'Dashboard',
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
      case SELECT_VIEW:
      return {
        ...state,
        selectedView: action.payload,
      };
    default:
      return state;
  }
};





export default authReducer;
