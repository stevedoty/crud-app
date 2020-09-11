import React from 'react';
import logo from './logo.svg';
import {Container, Card, Breadcrumb, Button, Image, Modal, Form, Col} from 'react-bootstrap'

import Organizer from './components/Organizer.js'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import landscape from './assets/landscape.jpg'







function App() {
  const [modalShow, setModalShow] = React.useState(true);
  return (
    <div className="App">
      <div className="App-header">
        <Organizer/>
      </div>
    </div>
  );
}

export default App;
