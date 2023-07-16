import React from 'react'
import Movie from './Movie'
function MovieList({props}) {


  return (
    <div>
{

props.map((obj,i)=>(

<Movie props = {obj} key={i} />

)



)



}
    </div>
  )
}

export default MovieList