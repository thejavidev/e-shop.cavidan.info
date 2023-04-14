import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import ProductsList from '../UI/ProductsList';

const PopularCategory = ({dataPopular}) => {
  return (
    <section className='popular_category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'> 
                  Popular in Category
              </h2>
            </Col>
            <ProductsList data={dataPopular} />
           
          </Row>
        </Container>
      </section>
  )
}

export default PopularCategory
