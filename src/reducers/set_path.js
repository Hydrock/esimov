import * as constants from '@src/constants.js'

function path(state = {path: '/'}, action) {
  switch (action.type) {
    case constants.SET_PATH:
      return Object.assign({}, state, {
        path: action.payload
      })
    default:
      return state
  }
}

export default path;