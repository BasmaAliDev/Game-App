import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

export default function Details() {
  let { id } = useParams();
 const navigate= useNavigate();
  const [details, setDetails] = useState(null);
  async function getDetails() {
    try {
      if(id>0){
      let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
        params: { 'GameID': id },
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': 'cf0d354a93msha6cf1d2ff183363p17a174jsnc24f4f4f6d47'
        }
      })
      console.log(data);
      setDetails(data)}else{
        navigate('*')
      }
    } catch (error) {
console.log(error);

    }
  }

  console.log("welcom");


  useEffect(() => {
    getDetails();
  }, []);



  return <>
    {details ?
      <div className="row py-5">
        <div className="col-md-3">
          <img class="card-img-top" src={details.thumbnail} />

          <div class=" d-flex align-items-center py-3">
            
              <span className=" text-gray">FREE</span>
            
            <div className="play-now ">
              <a type="button" name="playnow" class="btn btn-primary px-5 ms-1"
                href={details.freetogame_profile_url}
                target="_blank">
                <strong>PLAY NOW </strong>
                <i className="fas fa-sign-out-alt"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-8 ps-5">
          <div className='details'>
            <h1 className='fa-2x'>{details.title}</h1>
            <span>About {details.title}</span>
            <p>{details.description}</p>
            <p className='h5'>Lost Ark Screenshots</p>
            <img src={details.screenshots[0].image} className='w-100' alt="Screenshot" />
            <h2 className="py-2 h3">Additional Information</h2>
            <div className="row mb-3">
              <div className="col-6 col-md-4"> <span className='text-gray fa-sm' >Title<br /></span> <p className='fa-sm py-2'>{details.title}</p> </div>
              <div className="col-6 col-md-4 "> <span className='text-gray fa-sm' >Developer<br /></span><p className='fa-sm py-2'> {details.developer}</p> </div>
              <div className="col-6 col-md-4"> <span className='text-gray fa-sm' >Publisher<br /></span><p className='fa-sm py-2'> {details.publisher} </p></div>
              <div className="col-6 col-md-4"> <span className='text-gray fa-sm' >Release Date<br /></span><p className='fa-sm py-2'> {details.release_date } </p></div>
              <div className="col-6 col-md-4"> <span className='text-gray fa-sm' >Genre<br /></span><p className='fa-sm py-2'> {details.genre} </p></div>
              <div className="col-6 col-md-4"> <span className='text-gray fa-sm' >Platform<br /></span><p className='fa-sm py-2'> <i className="fab fa-windows mr-1"></i> {details.platform} </p></div>
            </div>
          </div>

        </div>
      </div>

      : <Loading />}

  </>
}


