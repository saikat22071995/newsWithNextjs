import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import newsReducer from '../reducer/newsReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        news:newsReducer,
    }),applyMiddleware(thunk))
    return store
}

export default configureStore