import {RETRIVE_USER} from '../../../constants/actionTypes';

export default () => (dispatch) => {
  dispatch({
    type: RETRIVE_USER,
  });
};