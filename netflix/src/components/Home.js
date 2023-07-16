import React, { useEffect, useState } from 'react';
import MovieList from "./MovieList";
function Home() {


    const [data, setData] = useState([]);
    async function getTrending() {
        const url = process.env.REACT_APP_SERVER_URL;
        // console.log(url);
        const response = await fetch(`${url}/trending`);
        const trending = await response.json();
        setData(trending);
    }
    useEffect(() => {
        getTrending();
        // console.log(data);


    }
        ,
        []);


    return (
        <div><MovieList props={data} /></div>
    )
}

export default Home