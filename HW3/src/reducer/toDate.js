import { TO_RANGE } from '../constants'

export default (date = null, action) => {
  switch (action.type) {
    case TO_RANGE:
      return action.payload.date
  }

  return date
}