import React from 'react';
import './Sidebar.css';
import DashedBackground from '../dashedBackground/DashedBackground';

const Sidebar = ( props) => {
  return (
    <div className='sidebar-container'>
      <DashedBackground color="#81d1e5" radius="5px" text="Products on Sale" width="100%" borderWidth="100%" />
    </div>
  )
}
export default Sidebar;