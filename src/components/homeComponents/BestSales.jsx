import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import ProductsList from '../UI/ProductsList';

const BestSales = ({dataSales}) => {
  return (
    <section className="best_sales">
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                    <h2 className='section_title'> 
                        Best Sales
                    </h2>
                </Col>
                <ProductsList data={dataSales} />
            </Row>
        </Container>
      </section>
  )
}

export default BestSales
