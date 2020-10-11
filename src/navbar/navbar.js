import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlinks: false,
    };
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }
  toggleNavBar() {
    this.setState({
      navlinks: !this.state.navlinks,
    });
  }
  closeNavBar() {
    this.setState({
      navlinks: false,
    });
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <img
            className="project__logo__image"
            src="http://via.placeholder.com/150x50"
          />
        </div>
        <div className="navbar__spacer"></div>
        <div
          className={`navbar__links ${
            this.state.navlinks ? "" : "navbar__hidden"
          }`}
        >
          <div className="navbar__links__link"><img
            className="project__logo__image"
            src="http://via.placeholder.com/150x50"
          /></div>
          <div className="navbar__links__link"><img
            className="project__logo__image"
            src="http://via.placeholder.com/150x50"
          /></div>
        </div>
        <div className="navbar__burgerbutton" onClick={this.toggleNavBar}>
          <img
            className="project__logo__image"
            src="http://via.placeholder.com/50x50"
          />
        </div>
      </div>
    );
  }
}
