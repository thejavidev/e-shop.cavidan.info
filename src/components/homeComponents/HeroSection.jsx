import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import hero from '../../assets/images/hero-img.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const year =new Date().getFullYear();
  return (
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
  )
}

export default HeroSection
