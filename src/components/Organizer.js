import React, {Component} from 'react'
import {Container, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

import {setVisibilityFilter} from '../actions'

import NewNoteModal from './NewNoteModal.js'
import Note from './Note.js'

import landscape from '../assets/landscape.jpg'

class Organizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      db:[],
      divState:"none"
    }
    this.modalChange = this.modalChange.bind(this)
  }


modalChange(){
  if(this.state.divState=="none"){
    this.setState({divState:"block"})
  }else{
    this.setState({divState:"none"})
  }
  this.props.onClickTriggerAction(this.state.divState)
}

  render(){
    return(
      <div>
        <Container style={{
          borderRadius:"0.25rem",
          border:"10px solid white",
          padding:"2px",
          width:"1000px",
          height:"200px"
        }}>
        <Button onClick={this.modalChange}>toggle</Button>
        <NewNoteModal props />
        </Container>
        <Container style={{
          backgroundImage:`url(${landscape})`,
          borderRadius:"0.25rem",
          padding:"3px",
          width:"1000px",
          height:"800px"
        }}>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        </Container>
      </div>
    )
  }
}



//STATE
const mapStateToProps = (state, ownProps) => ({
})

//DISPATCH
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickTriggerAction: (x) => dispatch(setVisibilityFilter(x))
})

//CONNECT TO STORE
export default connect(mapStateToProps, mapDispatchToProps)(Organizer)
