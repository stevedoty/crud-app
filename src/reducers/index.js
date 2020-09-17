import {combineReducers} from 'redux'
// import {setVisibilityFilter, createList, createNote} from '../actions'

const initialState = {
    db:[
      {
        noteTitle:"Groceries",
        notes:[
          {
            title:"Food",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Water",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Shelter",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Creativity",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Purpose",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Education",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Communication",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Information",
            detail:"some detail",
            child:"child title"
          },
          {
            title:"Travel",
            detail:"some detail",
            child:"child title"
          },
        ],
      }
    ],
    divState:"none"
}

const crudDB = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {...state, divState:action.divState}
    case 'CREATE_LIST':
      return {...state, notes:action.notes}
    case 'CREATE_NOTE':
      return {...state, notes:action.notes}
    default:
      return state
  }
}


export default combineReducers({
  crudDB
})
