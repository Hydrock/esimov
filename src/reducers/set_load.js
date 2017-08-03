import * as constants from '@src/constants.js'

function load(state = {loadState: "loaded"}, action) {
  switch (action.type) {
    case constants.SET_LOAD:
      return Object.assign({}, state, {
        loadState: action.payload.loadState
      })
    default:
      return state
  }
}

export default load;