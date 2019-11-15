import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

//state
const initalStore = {
  creator: '马文涛'
}

//reducer
function getReducer(){
  return combineReducers({
  })
}
//middleware
function createMiddle(){
  return applyMiddleware(thunkMiddleware)
}

//store
let store = createStore(getReducer(), initalStore, createMiddle())


export default store