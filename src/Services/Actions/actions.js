export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const SELECT_VIEW = "SELECT_VIEW";

export const authenticateUser = (authorizationCode, username) => ({
  type: AUTHENTICATE_USER,
  payload: { authorizationCode, username },
});

export const selectView = (view) => ({
  type: SELECT_VIEW,
  payload: view,
});
