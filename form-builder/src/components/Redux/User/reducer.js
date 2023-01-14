import { LOGIN, LOGOUT } from "./action";

const initState = {
  userEmail: JSON.parse(localStorage.getItem("user"))?.userEmail || "",
  userProfile: JSON.parse(localStorage.getItem("user"))?.userProfile || "",
  userName: JSON.parse(localStorage.getItem("user"))?.userName || "",
  isLoggedIn: JSON.parse(localStorage.getItem("user"))?.isLoggedIn || false,
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
      localStorage.setItem("user", JSON.stringify({ ...state }));
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
      localStorage.clear("user");
      return state;
      break;
    default:
      return state;
      break;
  }
};
