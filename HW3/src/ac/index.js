import { DELETE_ARTICLE, INCREMENT, SELECT_ARTICLE } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function selectArticle(selected) {
  return {
    type: SELECT_ARTICLE,
    selected
  }
}
