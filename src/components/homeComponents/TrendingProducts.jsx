import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import ProductsList from '../UI/ProductsList';

const TrendingProducts = ({dataTrendig}) => {
  return (
    <section className="trending_products">
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                <h2 className='section_title'> 
                    Trending products
                </h2>
                </Col>
                <ProductsList data={dataTrendig} />
            </Row>
        </Container>
    </section>
  )
}

export default TrendingProducts
