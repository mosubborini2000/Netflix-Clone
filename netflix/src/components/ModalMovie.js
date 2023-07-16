import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function ModalMovie({props,handleClose,handleShow, show}) {

//hi

  return (
    <>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <img variant="top" src={`https://image.tmdb.org/t/p/original/${props.poster_path}` }style={{width:'100%',height:'350px'}} />

          <Form>


            <Form.Label>comment</Form.Label>
            <Form.Control as="textarea" rows={3} />

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            add to favorite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie