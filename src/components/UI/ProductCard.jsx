import React from 'react';
import productImg from '../../assets/images/arm-chair-01.jpg';
import { motion } from 'framer-motion';
import '../../styles/productList/product.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <Col lg='3' md='4'>
        <div className='product_item'>
            <div className="product_img">
                <motion.img whileHover={{scale:.9}} src={item.imgUrl} alt="" />
            </div>
            <div className="p-2 product_info">
                <h3 className='product_name'><Link to='/shop/id'>{item.productName}</Link></h3>
                <span className='text-span'>{item.category}</span>
            </div>
            <div className="product_card_bottom d-flex align-items-center justify-content-between p-2">
                <span className="price">${item.price}</span>
                <motion.span whileTap={{scale:1.1}}><i class="ri-add-line"></i></motion.span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard
