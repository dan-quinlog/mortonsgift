import React from "react";

export default function () {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          className="project__logo__image"
          src="http://via.placeholder.com/150x50"
          alt="logo"
        />
      </div>
      <div className="navbar__spacer"></div>
      <div className="navbar__links">
        <div className="navbar__links__link">link1</div>
        <div className="navbar__links__link">link2</div>
      </div>
      <div className="navbar__c2a">
        <span>Contact Us</span>
      </div>
    </div>
  );
}
