import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// Import the images
import gameImage1 from '../../image/game1.png';
import gameImage2 from '../../image/game2.png';
import gameImage3 from '../../image/game3.png';
import gameImage4 from '../../image/game4.png';
import gameImage5 from '../../image/game5.png';
import { Link } from 'react-router-dom';
export default function HomeSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true, 
    autoplaySpeed: 3000 
    };

    return <>
   
   <Slider {...settings}>
            <div className='position-relative vh-100 d-flex align-items-center '>
                <div>
                <img className='w-100' src={gameImage1} alt="game" />
                <div className='slider position-absolute top-50 start-50 translate-middle'>
                <p className='h1'>Pack for Paradise now!</p>
                <p className='h3'>Unlock even more rewards with the Tavern Pass!</p>
                <Link to={'/home'} className='btn btn-outline-info' >See All Games</Link >
                </div>
                </div>
            </div>
            <div className='position-relative vh-100 d-flex align-items-center'>
                <img className='w-100' src={gameImage2} alt="game1" />
                <div className='slider position-absolute top-50 start-50 translate-middle'>
                <p className='h1'>Pack for Paradise now!</p>
                <p className='h3'>Unlock even more rewards with the Tavern Pass!</p>
               <Link to={'/home'} className='btn btn-outline-info' >See All Games</Link >
                </div>
            </div>
            <div className='position-relative vh-100 d-flex align-items-center'>
                <img className='w-100' src={gameImage3} alt="game2" />
                <div className='slider position-absolute top-50 start-50 translate-middle'>
                <p className='h1'>Pack for Paradise now!</p>
                <p className='h3'>Unlock even more rewards with the Tavern Pass!</p>
               <Link to={'/home'} className='btn btn-outline-info' >See All Games</Link >
                </div>
            </div>
            <div className='position-relative vh-100 d-flex align-items-center'>
                <img className='w-100' src={gameImage4} alt="game2" />
                <div className='slider position-absolute top-50 start-50 translate-middle'>
                <p className='h1'>Pack for Paradise now!</p>
                <p className='h3'>Unlock even more rewards with the Tavern Pass!</p>
               <Link to={'/home'} className='btn btn-outline-info' >See All Games</Link >
                </div>
            </div>
            <div className='position-relative vh-100 d-flex align-items-center'>
                <img className='w-100' src={gameImage5} alt="game2" />
                <div className='slider position-absolute top-50 start-50 translate-middle'>
                <p className='h1'>Pack for Paradise now!</p>
                <p className='h3'>Unlock even more rewards with the Tavern Pass!</p>
               <Link to={'/home'} className='btn btn-outline-info' >See All Games</Link >
                </div>
            </div>
        </Slider>
  
  
    </>
}
{/*
    
    
      
    */}