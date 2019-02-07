import { SELECT_ARTICLE } from '../constants'

export default (selectedArticle = null, action) => {
  switch (action.type) {
    case SELECT_ARTICLE:
      return action.selected
  }

  return selectedArticle
}
