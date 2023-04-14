import React from 'react';
import counterImg from '../../assets/images/counter-timer-img.png';
import { Container,Row,Col } from 'reactstrap';
import Clock from '../../components/UI/Clock';
import { Link } from 'react-router-dom';

const TimerCount = () => {
  return (
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
  )
}

export default TimerCount
