import React from 'react';
import '../../styles/footer/footer.css';
import { Container,Row,Col,LinkGroup,LinkGroupItem, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import  logo  from '../../assets/images/eco-logo.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
        <Container>
          <Row>
            <Col lg="4">
              <div className="logo mb-4 d-flex flex-wrap align-items-center ">
                <img src={logo} alt="" />
                <h1 className='fs-4 px-2 text-white'>
                    Multimart
                </h1>
                
              </div>
              <div className='footer_text mt-4 text-white'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt culpa ipsam nobis ab molestias facere iusto eius iure animi?
              </div>
            </Col>
            <Col lg="3">
              <div className="footer_quick_links">
                <h4 className="quick_links_title text-white">
                  Top Category
                </h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Mobile Phones</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Modren Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2">
              <div className="footer_quick_links">
                <h4 className="quick_links_title text-white">
                  Useful links
                </h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/shop'>Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/login'>Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="3">
              <div className="footer_quick_links">
                  <h4 className="quick_links_title text-white">
                    Contact
                  </h4>
                  <ListGroup>
                    <ListGroupItem className='ps-0 border-0'>
                      <span><i class="ri-map-pin-line"></i></span>
                      <p>Baku,Azerbaijan</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <span><i class="ri-phone-fill"></i></span>
                      <p>+944502563020</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <span><i class="ri-mail-line"></i></span>
                      <p>sales@sales.com</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
            </Col>
            <Col lg='12'> 
                <p className="copyright">Copyright - {year} developed by <Link to='https://cavidan.info' target='_blank'>Javidev</Link> .All rights reserved. </p>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
