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
import Product from '../cards/Product';

import CorazonProducts from '../assets/products/corazon.png'
import LawMDProducts from '../assets/products/lawMD.png'
import DoflamingoProducts from '../assets/products/doflamingo.png'
import PopDoffyProducts from '../assets/products/popdoffy.png'
import ResinCorazonProducts from '../assets/products/resincorazon.png'
import DoffyCoraProducts from '../assets/products/doffycora.png'
import G5LuffyProducts from '../assets/products/G5Luffy.png'
import ZoroProducts from '../assets/products/zoro.png'


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
  const products = [
    {
      id: 1,
      image: CorazonProducts,
      title: 'One Piece - Corazon',
      description: 'Corazon (Rosinante) - DXF Figure (Banpresto) - ONE PIECE',
      price: 1500
    },
    {
      id: 2,
      image: LawMDProducts,
      title: 'Law Super Master Stars Piece One Piece',
      description: 'Official Banpresto figure Brand new',
      price: 1800
    },
    {
        id: 3,
        image: DoflamingoProducts,
        title: 'Doflamingo Blacksuit',
        description: 'Young Donquixote Doflamingo Black ver.',
        price: 12000
    },
    {
        id: 4,
        image: PopDoffyProducts,
        title: 'Pop! Donquixote Doflamingo',
        description: 'Donquixote Doflamingo is on the hunt to find Luffy and the Straw Hat Pirates to make them pay for his arrest and dethroning.',
        price: 650
    },
    {
    id: 5,
    image: ResinCorazonProducts,
    title: 'Donquixote Rosinante Resin statue',
    description: 'A brand-new, unused, unopened, undamaged item..',
    price: 32984
    },
    {
        id: 6,
        image: DoffyCoraProducts,
        title: 'The Gentlest Corazon / Donquixote Rosinante ',
        description: 'WHO/S Studio Resin + PUH43 * W30 * D38cm Estimated',
        price: 56000
    },
    {
        id: 7,
        image: G5LuffyProducts,
        title: 'POP Scale Straw Hat Crew Series 001 Nika Monkey D. Luffy',
        description: 'Fox Studios Resin + PU POP Scale H36 * W24 *D27cm Estimated',
        price: 34000
    },
    {
        id: 8,
        image: ZoroProducts,
        title: '1/6 Scale Egghead Island Arc Roronoa Zoro',
        description: ' ONE PIECE Resin Statue - X6 Studio [Pre-Order]',
        price: 7616                                                               
    },
  ];
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
      <div className="home-container">
      <h1>Featured Products</h1>
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>

      <div className='display-container'>
        <img className='law' src={Law} alt="Law" />
      </div>
    </div>
  );
};

export default Home;
