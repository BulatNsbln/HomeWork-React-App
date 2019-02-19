import {
  ADD_COMMENT,
  DELETE_ARTICLE,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS,
  LOAD_COMMENTS
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({})
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_COMMENTS + SUCCESS:

      console.log('------------', response, 2222222222)
      return (
        state.mergeIn(['entities'], arrToMap(response.records, CommentRecord))
      )

    default:
      return state
  }
}


