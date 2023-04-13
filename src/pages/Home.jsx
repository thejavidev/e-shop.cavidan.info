import React,{ useState,useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container,Row,Col } from 'reactstrap';
import hero from '../assets/images/hero-img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import '../styles/home/home.css';
import products from '../assets/data/products';

const Home = () => {
  const year =new Date().getFullYear();

  const [data,setData]=useState(products);
  useEffect(()=>{
    const filteredProducts =products.filter(item =>item.category==='chair')
    setData(filteredProducts)
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
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
