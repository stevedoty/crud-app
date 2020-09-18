import {combineReducers} from 'redux'
// import {setVisibilityFilter, createList, createNote} from '../actions'

const initialState = {
    db:[
      {
        noteTitle:"NEEDS",
        notes:[
          {
            title:"Food",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title 0",
                childDetail:"child detail 0"
              }
            ]
          },
          {
            title:"Water",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title 1",
                childDetail:"child detail 1"
              }
            ],
          },
          {
            title:"Shelter",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title",
                childDetail:"child detail"
              }
            ],
          },
          {
            title:"Creativity",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title",
                childDetail:"child detail"
              }
            ],
          },
          {
            title:"Purpose",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title",
                childDetail:"child detail"
              }
            ],
          },
          {
            title:"Education",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title",
                childDetail:"child detail"
              }
            ],
          },
          {
            title:"Communication",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title",
                childDetail:"child detail"
              }
            ],
          },
          {
            title:"Information",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title",
                childDetail:"child detail"
              }
            ],
          },
          {
            title:"Travel",
            details:[
              "some detail"
            ],
            children:[
              {
                childTitle:"child title",
                childDetail:"child detail"
              }
            ],
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
