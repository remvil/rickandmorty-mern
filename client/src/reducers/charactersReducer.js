import { SET_CHARACTERS, SET_FAV} from "../actions/types";

const initialState = {
  characters: {},
  favs: {}
}

export default function(state=initialState, action){
  switch(action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }
    case SET_FAV:
      return {
        ...state,
        favs: action.payload
      }
    default:
      return state;
  }
}