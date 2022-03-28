import { applyMiddleware, compose, createStore } from "redux";
import homePageSaga from "../Saga/homePageSaga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(homePageSaga);
export default store;
