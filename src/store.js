import { createStore } from 'redux'

const store = createStore((store = {}, action) => {
  //console.log(action)
  if (action.type === 'ADD_TEXT') {
    return Object.assign({}, store, action.obj);
  } else if (action.type === 'SET_LOAD') {
    return Object.assign({}, store, action.obj);
  } else if (action.type === 'SET_PATH') {
    return Object.assign({}, store, action.obj);
  } else {
    return store
  }
})

// store.subscribe(() =>
//   console.log(store.getState())
// )

store.dispatch({ type: 'ADD_TEXT', obj: { text: 'text' } })
store.dispatch({ type: 'ADD_TEXT', obj: { text2: 'text2' } })

window.store = store

export default store