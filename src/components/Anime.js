import React,{ useState, useEffect} from 'react'
import axios from 'axios';
import AnimeList from './AnimeList';
import { AnimeInfo } from './AnimeInfo';


function Anime() {
  const[animeData, setAnimeData] =useState([]);
  const[search,setSearch]=useState(' ');
  const[animeInfo,setAnimeInfo]=useState();

  useEffect(() =>{
    axios.get(`https://api.jikan.moe/v4/anime${search}`)
    .then(res =>{
        console.log(res.data.data);
        setAnimeData(res.data.data);
      
    })
    .catch(err=>{
        console.log(err) 
    })
},[search])

  return (
   <>
   <div className="header">
       <h1>My Anime List</h1>
       <div className="search-box">
           <input type="search" placeholder="search anime..." onChange={(e) =>setSearch(e.target.value)} />
       </div>

   </div>
    <div className="container">
        <div className="animeInfo">
           {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
        </div>
        <div className="anime-row">
            <h2 className="text-heading"> Anime </h2>
            <div className="row">
              <AnimeList animelist={animeData}
              setAnimeInfo={setAnimeInfo}/>
            </div>
        </div>
    </div>
   </>
  );
}

export default Anime;