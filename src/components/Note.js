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
        <Breadcrumb.Item>{note.details[0]}</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb style={{padding:"2px" }}>
        <Breadcrumb.Item>{note.children[0].childTitle}</Breadcrumb.Item>
        <Breadcrumb.Item>{note.children[0].childDetail}</Breadcrumb.Item>
      </Breadcrumb>

        {note.children.map((child, i)=>{
          return <>{"hi"}</>
        })}

    </Card>
  )
}
export default Note;
