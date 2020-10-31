import { eventService } from "../services/eventService";
import { alertActions } from "./alertActions";
import {eventConstants} from "../constants";
import {history} from "../configureStore";

export const eventActions = {
  allEvents,
  createEvent,
  deleteEvent,
};

function allEvents() {
  return (dispatch) => {
    dispatch(request());

    eventService
      .allEvent()
      .then((resp) => {
        if (resp) {
          dispatch(success(resp));
          dispatch(alertActions.success("All Food Items Fetched"));
        } else {
          dispatch(failure(resp));
        }
      })
      .catch((err) => {
        dispatch(alertActions.error(err.message));
      });
  };

  function request() {
    return {type: eventConstants.EVENT_GETALL_REQUEST};
  }
  function success(allEvents) {
    return {type: eventConstants.EVENT_GETALL_SUCCESS, allEvents};
  }
  function failure(error) {
    return {type: eventConstants.EVENT_GETALL_FAILURE, error};
  }
}

function createEvent(data) {
  const {title,description,capacity,region,imgUrl} = data;
  const id = Date.now()+ Math.floor(Math.random()*1000);
  return (dispatch) => {
    dispatch(request());

    eventService
      .createEvent({id,title,description,capacity,region,imgUrl})
      .then((resp) => {
        if (resp) {
          dispatch(success(resp));
          dispatch(alertActions.success("Succesfully Added the Food Item"));
        } else {
          dispatch(failure(resp));
        }
      })
      .catch((err) => {
        dispatch(alertActions.error(err.message));
      });
  };

  function request() {
    return {type: eventConstants.EVENT_CREATE_REQUEST};
  }
  function success(data) {
    return {type: eventConstants.EVENT_CREATE_SUCCESS, data};
  }
  function failure(error) {
    return {type: eventConstants.EVENT_CREATE_FAILURE, error};
  }
}

function deleteEvent(id) {
  return (dispatch) => {
    dispatch(request());

    eventService
      .deleteEvent(id)
      .then((resp) => {
        if (resp) {
          dispatch(success(resp));
          dispatch(alertActions.error("Deleted food item with id: ",id))
          location.reload();
        } else {
          dispatch(failure(resp));
        }
      })
      .catch((err) => {
        dispatch(alertActions.error(err.message));
      });
  };

  function request() {
    return {type: eventConstants.EVENT_DELETE_REQUEST};
  }
  function success(data) {
    return {type: eventConstants.EVENT_DELETE_SUCCESS, data};
  }
  function failure(error) {
    return {type: eventConstants.EVENT_DELETE_FAILURE, error};
  }
}
