import React from 'react'
import {
  Container,
  Card,
  Breadcrumb,
  Button,
  Image,
  Modal,
  Form,
  Col} from 'react-bootstrap'
import landscape from '../assets/landscape.jpg'

let Note = (note) => {
  console.log(note);
   return(
     <Card
      style={{
        padding:"2px",
        margin:"0.25rem",
        float:"left",
        backgroundColor:"rgba(255,255,255,0)",
        border:"none"}}>
      <Breadcrumb style={{padding:"2px" }}>
        <Breadcrumb.Item>{note.title}</Breadcrumb.Item>
        <Breadcrumb.Item>{note.detail}</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Image
            src={landscape}
            style={{width:"20px", height:"20px"}}
          />
        </Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  )
}
export default Note;
