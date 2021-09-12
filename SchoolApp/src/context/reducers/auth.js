import {
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from '../../constants/actionTypes'

const auth = (state, {type, payload}) => {
switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };
    }

}
export default auth