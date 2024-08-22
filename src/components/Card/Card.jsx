import React from 'react'
import styles from './Card.module.css';
import {Link} from 'react-router-dom'
import Loading from './../Loading/Loading';
export default function Card({game}) {
  return <>

 {game? 
  <div className={`col-md-3  py-3`}>
  <Link to={`/${game.id}`}  className='text-decoration-none '>
  
<div   class="card h-100 bg-transparent text-secondary "   >
   <div  class="card-body">

      <figure class="position-relative">
         <img class="card-img-top object-fit-cover h-100" src={game.thumbnail} />
      </figure>

      <figcaption>

         <div class="hstack justify-content-center p-0">
            <h3 class=" fs-6 fw-bold">{game.title}</h3>
         </div>

         <p class="card-text small text-center opacity-50">
         {game.short_description.split(" ", 10)}
         </p>

      </figcaption>
   </div>

   <footer class="card-footer small hstack justify-content-between">

      <span class="badge ">{game.genre}</span>
      <span class="badge ">{game.platform}</span>

   </footer>
   
</div>

  </Link>
  <a href={game.game_url} target="_blank"  className=" btn btn-main bg-main w-100 p-1">Free</a>
</div>
 
: 
<Loading/>
 }
  
  
  
  </>
}


