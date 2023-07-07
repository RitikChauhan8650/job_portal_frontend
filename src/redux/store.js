// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { loadJobReducer, loadJobSingleReducer } from "./reducers/jobReducer";
// import { loadJobTypeReducer } from "./reducers/jobTypeReducer";
// import {
//   allUserReducer,
//   userApplyJobReducer,
//   userReducerLogout,
//   userReducerProfile,
//   userReducerSignIn,
// } from "./reducers/userReducer";

// // Combine reducers
// const reducer = {
//   loadJobs: loadJobReducer,
//   jobTypeAll: loadJobTypeReducer,
//   signIn: userReducerSignIn,
//   logOut: userReducerLogout,
//   userProfile: userReducerProfile,
//   singleJob: loadJobSingleReducer,
//   userJobApplication: userApplyJobReducer,
//   allUsers: allUserReducer,
// };

// // Initial state
// let initialState = {
//   signIn: {
//     userInfo: localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null,
//   },
// };

// // Create the Redux store
// const store = configureStore({
//   reducer,
//   preloadedState: initialState,
//   middleware: [thunk],
//   devTools: true,
// });

// export default store;
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  loadJobReducer,
  loadJobSingleReducer,
  registerAjobReducer,
} from "./reducers/jobReducer";
import {
  loadJobTypeReducer,
  createJobTypeReducer,
} from "./reducers/jobTypeReducer";
import {
  allUserReducer,
  userApplyJobReducer,
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn,
  userReducerSignUp,
} from "./reducers/userReducer";
import { modeReducer } from "./reducers/themeModeReducer";

//combine reducers
const reducer = combineReducers({
  loadJobs: loadJobReducer,
  jobTypeAll: loadJobTypeReducer,
  signIn: userReducerSignIn,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  singleJob: loadJobSingleReducer,
  userJobApplication: userApplyJobReducer,
  allUsers: allUserReducer,
  signUp: userReducerSignUp,
  mode: modeReducer,
  registerJob: registerAjobReducer,
  createJobType: createJobTypeReducer,
});

//initial state
let initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  mode: {
    mode: "light",
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
