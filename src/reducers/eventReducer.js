import {eventConstants} from "../constants";

const initialState = {};

export function eventReducer(state = initialState, action) {
  switch (action.type) {
    case eventConstants.EVENT_GETALL_REQUEST:
      return {
        fetchingAllEvents: true,
      };
    case eventConstants.EVENT_GETALL_SUCCESS:
      return {
        fetchedAllEvents: true,
        allEvents: action.allEvents,
      };
    case eventConstants.EVENT_GETALL_FAILURE:
      return {};
    case eventConstants.EVENT_CREATE_REQUEST:
      return Object.assign({}, state, {
        eventCreating: action.eventId,
      });
    case eventConstants.EVENT_CREATE_SUCCESS:
      return Object.assign({}, state, {
        eventCreated: action.data.id,
      });
    case eventConstants.EVENT_CREATE_FAILURE:
      return state;
    default:
      return state;
  }
}
