import axios from 'axios';

/**
 * Set the headers and add the Authorization to a token.
 * @param {*} token 
 */
const setAuthToken = token => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken