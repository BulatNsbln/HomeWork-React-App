import { DELETE_ARTICLE, INCREMENT, SELECT_ARTICLE, FROM_RANGE, TO_RANGE } from '../constants'

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

export function fromDate(date) {
  return {
    type: FROM_RANGE,
    date: {date}
  }
}

export function toDate(date) {
  return {
    type: TO_RANGE,
    date: {date}
  }
}
