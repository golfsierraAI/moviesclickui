import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Homepage from "./HomePage";
import store from "./Store/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
