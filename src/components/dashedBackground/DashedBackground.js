import React from "react";
import "./DashedBackground.css";

const DashedBackground = (props) => {
  return (
    <div className="dashed-background-container" style={{backgroundColor:`${props.color}`}}>
      <div className="dashed-background">{props.children}</div>
    </div>
  );
};

export default DashedBackground;
