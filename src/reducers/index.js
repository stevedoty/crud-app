import {combineReducers} from 'redux'

const initialState = {
    db:[],
    divState:"none"
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
     return {...state, divState:action.divState}
    default:
      return state
  }
}


export default combineReducers({
  todos
})
