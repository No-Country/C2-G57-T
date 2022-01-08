import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./TypesAuth";

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);      
      return {
        ...state,
        token: action.payload.token,
        status: true,
        user: action.payload.user.name,
        email: action.payload.user.email,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");      
      return {
        ...state,
        token: null,
        status: false,
        user: null,
        email: null,
      };
     



    default:
      return state;
  }
};
