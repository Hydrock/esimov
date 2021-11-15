import { combineReducers } from 'redux'

import load from '@src/reducers/set_load.js'
import menuState from '@src/reducers/toggle_menu.js'
import path from '@src/reducers/set_path.js'
import stories from '@src/reducers/get_stories.js'

const rootReducer = combineReducers({
  load,
  menuState,
  path,
  stories
})

export default rootReducer;