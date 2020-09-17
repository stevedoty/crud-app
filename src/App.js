import React from 'react';
import {Container, Card, Breadcrumb, Button, Image, Modal, Form, Col} from 'react-bootstrap'

import Organizer from './components/Organizer.js'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import landscape from './assets/landscape.jpg'






function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Organizer />
      </div>
    </div>
  );
}

export default App;
