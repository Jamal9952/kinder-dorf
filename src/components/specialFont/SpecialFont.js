import React from 'react';
import './SpecialFont.css'

const SpecialFont = (props) => {
  return (
    <div className='special-font'>
          <h2 className='special-font-heading'>{props.title}</h2>
          <p className='special-font-content'>{props.desc}<br />
              {props.descSecLine}</p>
    </div>
  )
}

export default SpecialFont;