import React, {Component} from 'react'
import {Container, Button} from 'react-bootstrap'

import NewTileModal from './NewTileModal.js'
import Tile from './tile.js'

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
}

  render(){
    return(
      <div>
        <Container style={{
          borderRadius:"0.25rem",
          border:"10px solid white",
          padding:"2px",
          width:"1000px",
          height:"400px"
        }}>
        <Button onClick={this.modalChange}>toggle</Button>
        <NewTileModal props />
        </Container>
        <Container style={{
          backgroundImage:`url(${landscape})`,
          borderRadius:"0.25rem",
          border:"10px solid white",
          padding:"2px",
          width:"1000px",
          height:"500px"
        }}>
        <Tile/>
        </Container>
      </div>
    )
  }

}



export default Organizer;
