import {combineReducers} from 'redux'

// const todos = (state = [], action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }


export default combineReducers({
  name:()=>{return"steve"},
  lastName:()=>{return"doty"}
})
