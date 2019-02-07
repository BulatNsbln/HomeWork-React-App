import { FROM_RANGE} from '../constants'

export default (date = null, action) => {
  switch (action.type) {
    case FROM_RANGE:
      return action.payload.date
  }

  return date
}