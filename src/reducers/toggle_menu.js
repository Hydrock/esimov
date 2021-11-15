import * as constants from '@src/constants.js'

function menuState(state = {opened: false}, action) {
  switch (action.type) {
    case constants.TOGGLE_MENU:
      return Object.assign({}, state, {
        opened: action.payload.opened
      })
    default:
      return state
  }
}

export default menuState;