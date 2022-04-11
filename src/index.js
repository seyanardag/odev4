import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./config/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { canditates } from "./action-reducer/candidatesReducer";
import thunk from "redux-thunk";
const initialState = {};
const store = createStore(canditates, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
