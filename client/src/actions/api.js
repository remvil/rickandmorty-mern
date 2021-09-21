import axios from 'axios';
import env from '../env.json'

export const getCharacterList = () => (dispatch) => {
  axios
    .get(env.API_SERVER_URL + 'character' )
    .then( response => {
      dispatch(response);
    })
    .catch(err => {
      console.log(err);
      dispatch(err);
    })
}