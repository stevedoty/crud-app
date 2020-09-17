import React, {Component} from 'react'
import {Container, Button, Navbar, Nav, NavDropdown, Form, FormControl, } from 'react-bootstrap'
import {connect} from 'react-redux'

import {setVisibilityFilter, createList, createNote} from '../actions'

import NewNoteModal from './NewNoteModal.js'
import Note from './Note.js'

import landscape from '../assets/landscape.jpg'

function Organizer({state}) {
  const {notes} = state.crudDB
  console.log("'Organizer properties'",notes);


  const modalChange = () => {
    console.log('hello', createList)
  }

  return(
    <div>
      {notes.map((note,i)=>{
      return  <Note key={i} {...note}/>
      })}

      <div>{'map notes from crudDB'}</div>
    </div>
  )

}



//STATE
const mapStateToProps = (state, ownProps) => ({
  state
})

//DISPATCH
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickTriggerAction: (x) => dispatch(setVisibilityFilter(x)),

})

//CONNECT TO STORE
export default connect(mapStateToProps, mapDispatchToProps)(Organizer)
