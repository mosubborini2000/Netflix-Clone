import React, { useEffect, useState } from 'react';
import MovieList from "./MovieList";
import Navbar from './Navbar';
import Movie from './Movie';
function Home() {

    

    const [data, setData] = useState([]);
    async function getTrending() {
        const url = process.env.REACT_APP_SERVER_URL;
        // console.log(url);
        const response = await fetch(`${url}/trending`);
        const trending = await response.json();
        setData(trending);
    }
    function commentHandler(newMovCom,id) {
        // getTrending();
        console.log('home',newMovCom,id);
        data.map((recipe)=>{
            if (recipe.id===id) {
                recipe.comment=newMovCom.comment;
            } else {
                return recipe;
            }



        })
        // console.log('home data',data);

    }
    useEffect(() => {
        getTrending();
        // console.log(data);


    }
        ,
        []);


    return (
        <div><MovieList props={data}  commentHandler={commentHandler}/></div>
    )
}

export default Home