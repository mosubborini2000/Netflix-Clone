import React from 'react'
import { Button, Card } from "react-bootstrap";
import { useState } from 'react';
import ModalMovie from './ModalMovie';
function Movie({props,commentHandler}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div>



<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" onClick={handleShow} >add to favorite</Button>
        <ModalMovie props={props}
         handleClose={handleClose}
          handleShow={handleShow} 
        show={show}
         commentHandler={commentHandler} />
        
      </Card.Body>
    </Card>


    </div>
  )
}

export default Movie