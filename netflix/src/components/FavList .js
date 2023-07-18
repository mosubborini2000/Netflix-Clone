import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
function FavList () {



const [favMov,setFavMov]=useState([]);
async function handlefavMov() {
  const url=`${process.env.REACT_APP_SERVER_URL}/getMovies`;
  let response=await fetch(url);
  let recData=await response.json();
  setFavMov(recData);

}
useEffect(() => {
  handlefavMov();
  // console.log(data);


}
  ,
  []);
  async function handleDelete(id) {
    const url=`${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;
    let response=await fetch(url,{
      method:"DELETE",
      headers:{"Content-Type":"application/json"},


    });
    if(response.status===200){
      
      alert('DELETED SUCCESSFULLY')}

handlefavMov();
  }






  async function handleUpdate(id, updatedComment) {
    const url = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
    let response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: updatedComment }),
    });
    if (response.status === 200) {
      alert('COMMENT UPDATED SUCCESSFULLY');
      setFavMov(prevState =>
        prevState.map(mov => {
          if (mov.id === id) {
            return { ...mov, comment: updatedComment }; // Update the comment of the specific movie
          }
          return mov;
        })
      );
    }
  }



  console.log('favvvvv',favMov);

  return (
    <div>{favMov.map((mov,id)=>(
      <Card style={{ width: '18rem' }}>
      <img variant="top" src={`https://image.tmdb.org/t/p/original/${mov.poster_path}` }style={{width:'100%',height:'350px'}} />

      <Card.Body>
        <Card.Title>{mov.title}</Card.Title>
        <Card.Text>
          {mov.comment}
        
        </Card.Text>
        <Button variant="primary" onClick={()=>{handleDelete(mov.id)}}>Delete</Button>
        <Button variant="success" onClick={() => {
              const updatedComment = prompt('Enter the updated comment:');
              if (updatedComment !== null && updatedComment.trim() !== '') {
                handleUpdate(mov.id, updatedComment);
              }
            }}>Update</Button>      </Card.Body>
    </Card>




    ))} </div>
  )
}

export default FavList 