import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./TypesAuth";

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);      
      localStorage.setItem("user", action.payload.user.name);      
      return {
        ...state,
        token: action.payload.token,
        status: true,
        logged: true,
        user: action.payload.user.name,
        email: action.payload.user.email,
        isAdmin: action.payload.user.isAdmin
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");      
      localStorage.removeItem("user");      
      return {
        ...state,
        token: null,
        logged: false,
        status: false,
        isAdmin: false,
        user: null,
        email: null,
      };
     



    default:
      return state;
  }
};
