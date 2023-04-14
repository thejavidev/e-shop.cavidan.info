import React,{ useState,useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container,Row,Col } from 'reactstrap';
import hero from '../assets/images/hero-img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import Clock from '../components/UI/Clock';
import ProductsList from '../components/UI/ProductsList';
import '../styles/home/home.css';
import products from '../assets/data/products';
import '../styles/timer/timer.css';
import counterImg from '../assets/images/counter-timer-img.png';

const Home = () => {
  const year =new Date().getFullYear();

  const [tredningProducts,setTrendingProducts]=useState([]);
  const [bestSalesProducts,setBestSalesProducts]=useState([]);
  const [mobileProducts,setMobileProducts] =useState([]);
  const [wirelessProducts,setWirelessProducts]=useState([])

  useEffect(()=>{
    const filteredTrendingProducts =products.filter(item =>item.category==='chair');

    const filteredBestSalesProducts =products.filter(item =>item.category==='sofa')

    const filteredMobileProducts =products.filter(item =>item.category==='mobile')

    const filteredWirelessProducts =products.filter(item =>item.category==='wireless')

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
  },[])

  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
              <Col lg='6' md='6'> 
                  <div className="hero_content">
                    <p className="hero_title">Treding product in {year}</p>
                    <h2>Make Your Interior More Minimalistic & Modern </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit iure expedita quia, nihil quod voluptate possimus placeat? Sed, animi?</p>
                    <div className="btn_div">
                      <motion.button whileTap={{scale:1.1}} className="buy_btn"><Link to='/shop'>shop now</Link></motion.button>
                    </div>
                  </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="hero_img">
                    <img src={hero} alt="hero" />
                </div>
              </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'> 
                  Trending products
              </h2>
            </Col>
            <ProductsList data={tredningProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'> 
                  Best Sales
              </h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className='timer_count'> 
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock_top_content">
                <h4 className='text-white fs-6 mb-2'>Limited offers</h4>
                <h3 className='text-white fs-5 mb-3'>quality armchair</h3>
              </div>
              <Clock />
              <button className='buy_btn store_btn'>
                <Link to='/shop'>Viist store</Link>
              </button>
            </Col>
            <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'> 
                  New Arrivals
              </h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
