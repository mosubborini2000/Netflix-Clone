import React from 'react'
import Movie from './Movie'
function MovieList({props,commentHandler}) {


  return (
    <div>
{

props.map((obj,i)=>(

<Movie props = {obj} key={i} commentHandler={commentHandler}/>

)



)



}
    </div>
  )
}

export default MovieList