import React from 'react'
import {Container,Card, Button, Navbar, Nav, NavDropdown, Form, FormControl, } from 'react-bootstrap'
import {connect} from 'react-redux'

import {setVisibilityFilter} from '../actions'

// import NewNoteModal from './NewNoteModal.js'
import Note from './Note.js'


function Organizer({state}) {
  const {notes, db} = state.crudDB

  // const modalChange = () => {
  //   console.log('hello', createList)
  // }

  return(
    <Container>
      <Card
        style={{
          color:"white",
          backgroundColor:"rgba(255,255,255,0.38)"
        }}>
        {db[0].noteTitle}
        {db[0].notes.map((note, {children}, i)=>{
          console.log(i);
          return <Note key={i} {...note}/>
        })}
      </Card>
    </Container>
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
