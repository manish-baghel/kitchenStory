import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {history} from "../configureStore";
import {alertActions} from "../constants/alertConstants";
import PrivateRoute from "./PrivateRoute";
import Landing from "./Landing";
import CreateEvent from "./CreateEvent";
import DeleteEvent from "./DeleteEvent";
import AdminLogin from "./AdminLogin";

const Routes = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <AdminLogin />
        </Route>
        <PrivateRoute path="/manage/create" currentUser={props.currentUser}>
          <CreateEvent />
        </PrivateRoute>
        <PrivateRoute path="/manage/delete" currentUser={props.currentUser}>
          <DeleteEvent />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({currentUser: state.authentication});
export default connect(mapStateToProps, alertActions)(Routes);

