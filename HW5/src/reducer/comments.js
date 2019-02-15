import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ArticleRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action
  switch (type) {
    case ADD_COMMENT:
      return state.setIn(['entities', payload.articleId, randomId], {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .setIn(['entities', payload.id], arrToMap(response, ArticleRecord))
        .set('loading', false)


    default:
      return state
  }
}
