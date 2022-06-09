import React from 'react';
import './Shop.css'
import HeaderTop from '../../components/headerTop/HeaderTop';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Sidebar from '../../components/sidebar/Sidebar';

const Shop = () => {
  return (
    <div className='shop'>
      <HeaderTop />
      <Header />
      <Banner />
      <Sidebar />
    </div>
  )
}

export default Shop;