// actions.js
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

export const authenticateUser = (authorizationCode, username) => ({
  type: AUTHENTICATE_USER,
  payload: { authorizationCode, username },
});
