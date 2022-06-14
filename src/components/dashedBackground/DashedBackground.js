import React from "react";
import "./DashedBackground.css";
const DashedBackground = (props) => {
  return (
    <div className="dashed-background-container"  style={{ backgroundColor: `${props.color}` , borderRadius:`${props.radius}`, width:`${props.width}` }}>
      <div className="dashed-background" style={{borderRadius:`${props.radius}`, width:`${props.borderWidth}`}}>
        {props.children}
        <div className="btn-text">{props.text}</div>
      </div>
    </div>
  );
};

export default DashedBackground;
