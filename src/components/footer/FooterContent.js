import React from 'react';
import "./FooterContent.css";

const FooterContent = (props) => {
  return (
    <div className='footer-content'>
        <h3 className="content-heading">{props.heading}</h3>
            <ul className='footer-content-list'>
                {props.content.map(links => <li><a>{links}</a></li>)}
            </ul>
    </div>
  )
}

export default FooterContent;