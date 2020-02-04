import * as SessionAPIUtil from "../util/session_api_utils";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const logoutUser = () => {
  return {
    type: REMOVE_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: RECEIVE_USER
  };
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => dispatch(logoutUser()));
};
