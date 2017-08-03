import * as constants from '@src/constants.js'
import store from '@src/store.js'

export function setLoad(val) {
  store.dispatch({
    type: constants.SET_LOAD,
    payload: {
      loadState: val
    }
  })
}

export function toggleMenu(val) { 
  store.dispatch({
    type: constants.TOGGLE_MENU,
    payload: {
      opened: val
    }
  })
}

export function setPath(val) { 
  store.dispatch({
    type: constants.SET_PATH,
    payload: val
  })
}

