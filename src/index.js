import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./css/aos.css";
import { Provider } from "react-redux";
import "./index.css";
import "./css/responsive.css";
import App from "./App";
import { store } from "./utils/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
