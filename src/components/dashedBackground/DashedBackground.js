import React from "react";
import "./DashedBackground.css";
import { heroButtonsData } from "../../Utils/Services";
const DashedBackground = (props) => {
  return (
    <div className="dashed-background-container" style={{backgroundColor:`${props.color}`}}>
      <div className="dashed-background">{props.children}
       <div className="btn-text">{props.text}</div>
      </div>
    </div>
  );
};

export default DashedBackground;
