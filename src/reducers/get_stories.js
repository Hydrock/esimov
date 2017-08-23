import * as constants from '@src/constants.js'

function stories(state = {}, action) {
  //debugger
  switch (action.type) {
    case constants.GET_STORIES:
      return Object.assign({}, state, {
        stories: action.payload
      })
    default:
      return state
  }
}

export default stories;