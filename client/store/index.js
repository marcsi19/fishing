import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {galleryReducer} from './gallery'
import user from './user'
const reducer = combineReducers({
  gallery: galleryReducer,
  users: user
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
// const store = createStore(reducer, middleware)
const store =
  process.env.NODE_ENV === 'development'
    ? createStore(reducer, middleware)
    : createStore(reducer, applyMiddleware(thunkMiddleware))
export default store
export * from './user'
export * from './gallery'
