import React,{useRef,useEffect} from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { Container ,Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';


const Header = () => {

  const nav_links =[
    {
      path:'home',
      display:'Home'
    },
    {
      path:'shop',
      display:'Shop'
    },
    {
      path:'cart',
      display:'Cart'
    },
  ]

  const headerRef =useRef(null)

  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc();
    return ()=>window.removeEventListener('scroll',stickyHeaderFunc)
  },[])

  return (
    <header className='header' ref={headerRef}>
      <Container >
          <Row>
            <div className="nav_wrapper">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <div>
                    <h1>Multimart</h1>
                   
                  </div>
                </div>
                <div className="navigation">
                  <ul className="menu">
                    {nav_links.map((link,index)=>(
                      <li className='nav_item' key={index}>
                        <NavLink to={link.path} className={(navClass)=>navClass.isActive ? 'nav__active' : ''} >{link.display}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="nav_icons">
                    
                    <span className='fav_icon'>
                      <i className="ri-heart-line"></i>
                      <span className="badge">1</span>
                    </span>
                    <span className='cart_icon'>
                      <i className="ri-shopping-bag-line"></i>
                      <span className="badge">1</span>
                    </span>
                    <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="usericon" /></span>
                </div>
                <div className="mobile_menu">
                  <span><i className="ri-menu-line"></i></span>
                </div>
            </div>
          </Row>
      </Container>
    </header>
  )
}

export default Header
