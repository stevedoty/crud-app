import React, {useState} from 'react'
import {Container, Card, Breadcrumb, Button, Image, Modal, Form, Col} from 'react-bootstrap'




// style={{display:`${this.state.divState}`}}

function NewNoteModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{marginBottom:"5px"}}>
        AddNote
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Title" />
            </Col>
            <Col>
              <Form.Control placeholder="Detail" />
            </Col>
          </Form.Row>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewNoteModal
