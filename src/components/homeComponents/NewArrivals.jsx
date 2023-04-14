import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import ProductsList from '../UI/ProductsList';

const NewArrivals = ({dataMobile,dataWireless}) => {
  return (
    <section className='new_arrivals'>
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                <h2 className='section_title'> 
                    New Arrivals
                </h2>
                </Col>
                <ProductsList data={dataMobile} />
                <ProductsList data={dataWireless} />
            </Row>
        </Container>
  </section>
  )
}

export default NewArrivals
