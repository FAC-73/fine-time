import React from "react";
import "./style.css";

const iconStyle = {
    color: "#00C2FF",
    fontSize: "40px",
    paddingBottom: "8px"
}

function AppHeader() {
  return (
    <div className="wrapper">
        <div><i className="fas fa-id-card-alt" style={iconStyle}></i></div>
      <div className="title">Employee Directory</div>
    </div>
  );
}

export default AppHeader;
