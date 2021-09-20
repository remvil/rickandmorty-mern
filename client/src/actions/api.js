import axios from 'axios';

const apiBaseUrl = 'https://rickandmortyapi.com/api/';

export const getCharacterList = () => (dispatch) => {
  axios
    .get(apiBaseUrl + 'character' )
    .then( response => {
      console.log(response);
      dispatch(response);
    })
    .catch(err => {
      console.log(err);
      dispatch(err);
    })
}