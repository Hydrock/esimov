import * as constants from '@src/constants.js'
import store from '@src/store.js'

import axios from 'axios';

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

export function getStories() {
  axios.get('http://hydrock.ru/wp-json/wp/v2/stories')
  .then(function (response) {
    store.dispatch({
      type: constants.GET_STORIES,
      payload: response
    })
  }) 
}