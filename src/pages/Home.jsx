import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; 
import Law from '../assets/Law.png';
import Corazon from '../assets/img1.jpg';
import KidLaw from '../assets/img2.jpg';
import Beepo from '../assets/img3.jpg';

import Bleach from '../assets/slider/bleach.png'
import DemonSlayer from '../assets/slider/demonslayer.png'
import Dragonball from '../assets/slider/dragonball.png'
import HeroAcademia from '../assets/slider/heroacademia.png'
import Onepiece from '../assets/slider/onepiece.png'
import Slamdunk from '../assets/slider/slamdunk.png'
import Transformers from '../assets/slider/transformers.png'

const images = [Corazon, KidLaw, Beepo];
const animeLogos = [Bleach, DemonSlayer, Dragonball, HeroAcademia, Onepiece, Slamdunk, Transformers];

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow arrow-left" onClick={onClick}>
            &#10094;
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow arrow-right" onClick={onClick}>
            &#10095;
        </div>
    );
};

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const animeSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='home-container'>
      <div className='slider-container'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className='slider-image' />
            </div>
          ))}
        </Slider>
      </div>

      <div className='anime-slider-container'>
        <Slider {...animeSettings}>
          {animeLogos.map((logo, index) => (
            <div key={index} className='anime-slide'>
              <img src={logo} alt={`Anime Logo ${index}`} className='anime-slider-image' />
            </div>
          ))}
        </Slider>
      </div>

      <div className='display-container'>
        <img className='law' src={Law} alt="Law" />
      </div>
    </div>
  );
};

export default Home;
