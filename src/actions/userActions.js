import {userService} from "../services";
import {alertActions} from "./alertActions";
import {userConstants} from "../constants";
import {history} from "../configureStore";

export const userActions = {
  login,
  logout,
};

function login(data) {
  const {email, password} = data;
  const location = history.location;
  const {from} = location.state || {from : {pathname:"/"}};
  return (dispatch) => {
    dispatch(request({email}));

    userService
      .login(email, password)
      .then((resp) => {
        if (resp) {
          dispatch(success(resp));
          history.replace(from);
          dispatch(alertActions.success("Logged In Succesfully"));
        } else {
          dispatch(failure(resp));
          dispatch(alertActions.error("Server Error"));
        }
      })
      .catch((err) => {
        dispatch(alertActions.error(err.message));
      });
  };
  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
}

// function signup(data){
//   return (dispatch) => {
//     dispatch(request(data));
//     userService.signup(data)
//       .then((resp) => {
//         if(resp.status) {
//           dispatch(success(resp.data));
//           history.push("/");
//           dispatch(alertActions.success(resp.msg));
//         }
//         else {
//           dispatch(failure(resp.msg));
//           dispatch(alertActions.error(resp.msg));
//         }
//       })
//       .catch(err => {
//         dispatch(alertActions.error(err.message));
//       });
//   };
//   function request(user) {
//     return {type: userConstants.SIGNUP_REQUEST, user};
//   }
//   function success(user) {
//     return {type: userConstants.SIGNUP_SUCCESS, user};
//   }
//   function failure(error) {
//     return {type: userConstants.SIGNUP_FAILURE, error};
//   }
// }

function logout() {
  return (dispatch) => {
    userService.logout();
    dispatch(success());
    dispatch(alertActions.success("Logged out Succesfully"));
  };
  function success() {
    return {type: userConstants.LOGOUT};
  }
}

