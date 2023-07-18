import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef,useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function ModalMovie({props,handleClose,handleShow, show,commentHandler}) {
  const commentRef=useRef();
const [Comment,setComment]=useState('');
//hi
function handleSubmit(e) {
  e.preventDefault();
  const comment = commentRef.current.value;
  // console.log('value',commentRef.current.value);
  // console.log(props);
  setComment(comment);
  const newMovCom={...props,comment};
  commentHandler(newMovCom,props.id);
  console.log('newcom',newMovCom.id);
}
async function  handleAddToFav(e) {
  e.preventDefault();
  let url=`${process.env.REACT_APP_SERVER_URL}/addMovie`
  let data = {title:props.title, release_date:props.release_date, 
    poster_path:props.poster_path, overview:props.overview,comment:props.comment}

    let response=await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body :JSON.stringify(data)
    })   
    let recData=await response.json();
    // console.log('recdata',recData);
    if(response.status===201){
      
      alert('ADDED SUCCESSFULLY')}
        

}




  return (
    <>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <img variant="top" src={`https://image.tmdb.org/t/p/original/${props.poster_path}` }style={{width:'100%',height:'350px'}} />

          <Form onClick={(e)=>handleSubmit(e)}>


            <Form.Label>comment</Form.Label>
            <Form.Control ref={commentRef} as="textarea" rows={3} />
            <Button variant="primary" onClick={handleAddToFav} type="submit">
            add to favorite
          </Button>


          {/* <Button variant="primary" onClick={handleAddToFav} type="submit">
            add to favorite
          </Button> */}
          </Form>
          {Comment?Comment:'NO Comment Added'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie