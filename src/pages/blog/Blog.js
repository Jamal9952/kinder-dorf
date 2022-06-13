import React from 'react';
import './Blog.css';
import SpecialFont from '../../components/specialFont/SpecialFont';
import Header from '../../components/header/Header';

const Blog = (props) => {
  return (
    <div className='page'>
        <Header />
        <div className='not-avail'><SpecialFont title="Blog Page ✍🏻" desc="Not Available Right Now" descSecLine="Coming Soon" /></div>
    </div>
  )
}

export default Blog