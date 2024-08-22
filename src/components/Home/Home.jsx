import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { userInfoContext } from '../../context/userInfo';

export default function Home() {

    const {userToken,setUserToken}=useContext(userInfoContext);
    const [allGames, setAllGames] = useState([]);
     function getData(){
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
          headers:{
             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
             'x-rapidapi-key': 'cf0d354a93msha6cf1d2ff183363p17a174jsnc24f4f4f6d47'
          }
        })
    }
    let {data,isLoading}= useQuery('AllGame',getData);

 useEffect(() => {
  setUserToken(localStorage.getItem('userToken'));
  console.log("welcom ",userToken);
  if (data?.data) {
      setAllGames(data.data);
  }
}, [data]);
if(isLoading)return<Loading/>  
    
   
  return <>
 <div className="container py-5">
 <div className="row g-4">
 {allGames?.map((game,idx)=>{
return <Card key={idx} game={game}/>
  })}
 </div>
 </div>


  </>
}
