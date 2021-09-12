import {
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes'

export default ({}) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS
  })
}