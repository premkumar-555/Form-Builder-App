const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const logIn = (payload) => ({ type: LOGIN, payload });
const logOut = (payload) => ({ type: LOGOUT, payload });

export { logIn, logOut };
export { LOGIN, LOGOUT };
