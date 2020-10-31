import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {reducer as toastr} from "react-redux-toastr";
import {eventReducer} from "./reducers/eventReducer";
import {searchReducer} from "./reducers/searchReducer";
import {alert} from "./reducers/alertReducer";
import {authentication} from "./reducers/adminAuthReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    toastr,
    eventReducer,
    alert,
    searchReducer,
    authentication
    //... all reducers
  });

export default createRootReducer;
