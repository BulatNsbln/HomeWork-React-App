import { createStore } from 'redux'
import reducer from '../reducer'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'

const store = createStore(
  reducer,
  /* preloadedState, */ devToolsEnhancer()
  // options like actionSanitizer, stateSanitizer
)

//dev only!!!
window.store = store

export default store
