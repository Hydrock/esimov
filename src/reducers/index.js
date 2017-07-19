import { combineReducers } from 'redux'

import load from '@src/reducers/set_load.js'
import menuState from '@src/reducers/toggle_menu.js'
import path from '@src/reducers/set_path.js'

const rootReducer = combineReducers({
  load,
  menuState,
  path
})

export default rootReducer;