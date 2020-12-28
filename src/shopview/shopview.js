import React, { Component } from "react";
import { connect } from "react-redux";

import Carousel from "./carousel";

class ShopView extends Component {
  render() {
    const { projects } = this.props;
    console.log(projects);
    return (
      <div className="shopview">
        <div className="shopview__catagories">catagories</div>
        <div className="shopview__catagorydetails">catagory details</div>
        <Carousel projects={projects} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(ShopView);
