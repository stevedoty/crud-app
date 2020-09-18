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
      {note.children.map((child, j)=>{
        return(
          <Breadcrumb key={j} style={{padding:"2px", marginLeft:"6px" }}>
            <Breadcrumb.Item>{child.childTitle}</Breadcrumb.Item>
            <Breadcrumb.Item>{child.childDetail}</Breadcrumb.Item>
          </Breadcrumb>
        )
      })}
    </Card>
  )
}
export default Note;
