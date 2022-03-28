import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Homepage from "./HomePage";
import store from "./Store/store";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./SearchPage";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
