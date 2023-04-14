import React,{ useState,useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import Services from '../services/Services';
import '../styles/home/home.css';
import products from '../assets/data/products';
import '../styles/timer/timer.css';
import HeroSection from '../components/homeComponents/HeroSection';
import TrendingProducts from '../components/homeComponents/TrendingProducts';
import BestSales from '../components/homeComponents/BestSales';
import TimerCount from '../components/homeComponents/TimerCount';
import NewArrivals from '../components/homeComponents/NewArrivals';
import PopularCategory from '../components/homeComponents/PopularCategory';

const Home = () => {
  const [tredningProducts,setTrendingProducts]=useState([]);
  const [bestSalesProducts,setBestSalesProducts]=useState([]);
  const [mobileProducts,setMobileProducts] =useState([]);
  const [wirelessProducts,setWirelessProducts]=useState([]);
  const [popularProducts,setPopularProducts]=useState([]);

  useEffect(()=>{
    const filteredTrendingProducts =products.filter(item =>item.category==='chair');
    const filteredBestSalesProducts =products.filter(item =>item.category==='sofa')
    const filteredMobileProducts =products.filter(item =>item.category==='mobile')
    const filteredWirelessProducts =products.filter(item =>item.category==='wireless')
    const filteredPopularProducts =products.filter(item =>item.category==='watch')

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  },[])

  return (
    <Helmet title={'Home'}>
      <HeroSection />
      <Services />
      <TrendingProducts dataTrendig={tredningProducts} />
      <BestSales dataSales={bestSalesProducts} />
      <TimerCount />
      <NewArrivals dataMobile={mobileProducts} dataWireless={wirelessProducts} />
      <PopularCategory dataPopular={popularProducts} />
      
    </Helmet>
  )
}

export default Home
