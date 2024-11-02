import React from "react";
import "./MainHeading.css"; 

const MainHeading = ({ headingText }) => {
  return (
    <div className="main-heading-container">
      <div className="header-background"></div>
      <h1 className="home-heading">{headingText}</h1>
    </div>
  );
};

export default MainHeading;
