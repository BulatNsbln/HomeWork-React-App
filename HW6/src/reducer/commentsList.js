import {
  LOAD_COMMENTS_LIST,
  SUCCESS
} from '../constants'

export default (state = [], action) => {
  const { type2, payload, response } = action

  switch (type2) {
    case LOAD_COMMENTS_LIST + SUCCESS:
      let arr = response.records.map( (item) => item.id );
      return state =  arr;

    default:
      return state
  }
}