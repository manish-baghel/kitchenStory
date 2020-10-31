import {createBrowserHistory} from "history";
import {applyMiddleware, compose, createStore} from "redux";
import {routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";

import createRootReducer from "./reducers";

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware
        // other middlewares
      )
    )
  );
  return store;
}
