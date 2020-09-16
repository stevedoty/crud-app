import React from 'react'
import {Container, Card, Breadcrumb, Button, Image, Modal, Form, Col} from 'react-bootstrap'
import landscape from '../assets/landscape.jpg'

let Note = (props) => {
   return(
     <Card style={{ width: '18rem', padding:"2px", margin:"0.25rem", float:"left", backgroundColor:"rgba(255,255,255,0)", border:"none"}}>
     <div style={{ color:"black", backgroundColor:"rgba(255,255,255,0.38)" }}>Honey Do List</div>
      <Breadcrumb style={{padding:"2px" }}>
        <Breadcrumb.Item>Take the garbage out</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb style={{padding:"2px",marginLeft:"20px" }}>
        <Breadcrumb.Item>Fix the leaky sink</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb style={{padding:"2px",marginLeft:"40px" }}>
        <Breadcrumb.Item>Refill the toilet paper</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb style={{padding:"2px",marginLeft:"20px" }}>
        <Breadcrumb.Item>Buy groceries</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  )
}
export default Note;
