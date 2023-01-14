import { LOGIN, LOGOUT } from "./action";

const initState = {
  userEmail: "",
  userProfile: "",
  userName: "",
  isLoggedIn: false,
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      //   state = {...state,}
      // console.log("payload", payload);
      state = {
        ...state,
        userEmail: payload?.email,
        userProfile: payload?.photoURL,
        userName: payload?.displayName,
        isLoggedIn: true,
      };
      localStorage.setItem(
        "user",
        JSON.stringify({
          userEmail: payload?.email,
          userProfile: payload?.photoURL,
          userName: payload?.displayName,
        })
      );
      return state;
      break;
    case LOGOUT:
      state = {
        ...state,
        userEmail: "",
        userProfile: "",
        userName: "",
        isLoggedIn: false,
      };
      // console.log("state ", state);
      return state;
      break;
    default:
      return state;
      break;
  }
};
