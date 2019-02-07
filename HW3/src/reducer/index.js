import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selected from './selected'
import fromReducer from './fromDate'
import toReducer from './toDate'

export default combineReducers({
  counter: counterReducer,
  articles,
  selected,
  from: fromReducer,
  to: toReducer
})
