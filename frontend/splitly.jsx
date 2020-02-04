import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { login, signup, logout } from '../frontend/util/session_api_utils'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  const store = configureStore()
  ReactDOM.render(<Root store={store} />, root);
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
});