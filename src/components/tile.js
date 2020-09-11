import React from 'react'
import {Container, Card, Breadcrumb, Button, Image, Modal, Form, Col} from 'react-bootstrap'
import landscape from '../assets/landscape.jpg'

let Tile = (props) => {
   return(
     <Card style={{ width: '18rem', padding:"2px", margin:"0.25rem", float:"left" }}>
      <Breadcrumb style={{padding:"2px" }}>
        <Breadcrumb.Item>Title</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb style={{padding:"2px",marginLeft:"20px" }}>
        <Breadcrumb.Item>Title</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb style={{padding:"2px",marginLeft:"40px" }}>
        <Breadcrumb.Item>Title</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb style={{padding:"2px",marginLeft:"20px" }}>
        <Breadcrumb.Item>Title</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
        <Breadcrumb.Item><Image src={landscape} style={{width:"20px", height:"20px"}}/></Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  )
}
export default Tile;
