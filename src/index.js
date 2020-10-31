import React from "react";
import ReactDom from "react-dom";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";

import App from "./components/App";
import configureStore, {history} from "./configureStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import { eventActions } from "./actions/eventActions";


const store = configureStore();
console.log(store);

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// fetching all events
eventActions.allEvents()(store.dispatch);
