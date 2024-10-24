import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountdownTimer from "../components/CountdownTimer";

import './Home.css';
import Corazon from '../assets/img1.jpg';
import KidLaw from '../assets/img2.jpg';
import Beepo from '../assets/img3.jpg';

//For slider
import Windbreaker from '../assets/slider/windbreaker.png';
import TowerOfGod from '../assets/slider/towerofgod.png';
import Bleach from '../assets/slider/bleach.png';
import DemonSlayer from '../assets/slider/demonslayer.png';
import Dragonball from '../assets/slider/dragonball.png';
import HeroAcademia from '../assets/slider/heroacademia.png';
import Onepiece from '../assets/slider/onepiece.png';
import Slamdunk from '../assets/slider/slamdunk.png';
import Transformers from '../assets/slider/transformers.png';
import Pokemon from '../assets/slider/pokemon.png';
import Product from '../cards/Product';

import CorazonProducts from '../assets/products/corazon.png';
import LawMDProducts from '../assets/products/lawMD.png';
import DoflamingoProducts from '../assets/products/doflamingo.png';
import PopDoffyProducts from '../assets/products/popdoffy.png';
import ResinCorazonProducts from '../assets/products/resincorazon.png';
import DoffyCoraProducts from '../assets/products/doffycora.png';
import G5LuffyProducts from '../assets/products/G5Luffy.png';
import ZoroProducts from '../assets/products/zoro.png';
import PokemonGirl from '../assets/products/pokemon-girl.png';

import LuffyKid from '../assets/products/luffykid.png';
import LuffyG5 from '../assets/products/luffyg5.png';
import LuffyYehey from '../assets/products/luffyyehey.png';
import Six from '../assets/products/six.png';
import LuffyCap from '../assets/products/luffycap.png';


import Banpresto from '../assets/brands/banpresto.png';
import Megahouse from '../assets/brands/megahouse.png';
import Kotobukiya from '../assets/brands/Kotobukiya.png';
import Aoshima from '../assets/brands/Aoshima.png';
import Bandai from '../assets/brands/bandai.png';
import IchibanKuji from '../assets/brands/ichiban.png';
import Animes from '../assets/animes.jpg';

const images = [Corazon, KidLaw, Beepo];
const animeLogos = [Bleach, DemonSlayer, Dragonball, Windbreaker, HeroAcademia, TowerOfGod, Onepiece, Slamdunk, Transformers, Pokemon];

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  const [visibleProducts, setVisibleProducts] = useState(12);
  const [products, setProducts] = useState([
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
      title: 'Law Super Master Stars Piece',
      description: 'Official Banpresto figure Brand new',
      price: 2000
    },
    {
      id: 3,
      image: DoflamingoProducts,
      title: 'Doflamingo Blacksuit',
      description: 'Young Donquixote Doflamingo Black version',
      price: 12000
    },
    {
      id: 4,
      image: PopDoffyProducts,
      title: 'Pop! Donquixote Doflamingo',
      description: 'Donquixote Doflamingo is on the hunt to find Luffy and the Straw Hat Pirates.',
      price: 650
    },
    {
      id: 5,
      image: ResinCorazonProducts,
      title: 'Donquixote Rosinante Resin statue',
      description: 'A brand-new, unused, unopened, undamaged item.',
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
      description: 'Fox Studios Resin.',
      price: 34000
    },
    {
      id: 8,
      image: ZoroProducts,
      title: '1/6 Scale Egghead Island Arc Roronoa Zoro',
      description: 'ONE PIECE Resin Statue - X6 Studio [Pre-Order]',
      price: 7616
    },
    {
      id: 9,
      image: PokemonGirl,
      title: 'May with Torchic',
      description: 'Pokemon Kotobukiya May with Torchic Figurine',
      price: 2900
    },
    {
      id: 10,
      image: LuffyKid,
      title: ' Monkey D. Luffy',
      description: ' Monkey D. Luffy Figure MegaHouse RUN! RUN! RUN! G.E.M. Series',
      price: 2900
    },
    {
      id: 11,
      image: LuffyG5,
      title: '',
      description: 'Pokemon Kotobukiya May with Torchic Figurine',
      price: 2900
    },
    {
      id: 12,
      image: LuffyYehey,
      title: 'May with Torchic',
      description: 'Pokemon Kotobukiya May with Torchic Figurine',
      price: 2900
    },
    {
      id: 13,
      image: LuffyCap,
      title: 'May with Torchic',
      description: 'Pokemon Kotobukiya May with Torchic Figurine',
      price: 2900
    },
    {
      id: 14,
      image: Six,
      title: 'May with Torchic',
      description: 'Pokemon Kotobukiya May with Torchic Figurine',
      price: 2900
    }
  ]);

  const showMoreProducts = () => {
    setVisibleProducts(products.length);
  };

  const gifRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gifRef.current) {
        gifRef.current.src = "/toy-vid.gif?" + new Date().getTime();
      }
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home-container'>
      <div className="moving-text">
        <p>This project is not finished yet.</p>
      </div>

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

      <div className='timer-bg'>
        <CountdownTimer />
      </div>

      <div className="home-container">
        <h1>Featured Products</h1>
        <div className="product-list">
          {products.slice(0, visibleProducts).map((product) => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className='view-more'>
            <button className='view-more-btn' onClick={showMoreProducts}>
              View more
            </button>
          </div>
        )}
      </div>

      <div className='animes'>
        <img src={Animes} alt="" />
      </div>

      <div className='vid-container'>
        <div>
          <div className='ATC'>
            <h1>The ATC Story</h1>
          </div>
          <img
            className='circular-vid'
            ref={gifRef}
            src="/toy-vid.gif"
            alt="Animated GIF"
          />
        </div>
      </div>

      <div className='popular-brands-title'>
        <h1>Popular Brands</h1>
        <div className='brands-card'>
          <div><img style={{ height: 'auto', width: '100px' }} src={Megahouse} alt="" /></div>
          <div><img src={Kotobukiya} alt="" /></div>
          <div><img style={{ height: 'auto', width: '100px' }} src={Aoshima} alt="" /></div>
          <div><img src={Banpresto} alt="" /></div>
          <div><img style={{ height: 'auto', width: '100px' }} src={Bandai} alt="" /></div>
          <div><img style={{ height: 'auto', width: '100px' }} src={IchibanKuji} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
