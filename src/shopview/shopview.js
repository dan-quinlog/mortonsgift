import React, { Component } from "react";

import Carousel from "./carousel";

export default class ShopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "1",
          price: "10.95",
          title: "first project",
          content: "blah blarg honk",
        },
        {
          id: "2",
          price: "100.95",
          title: "second project",
          content: "some text",
        },
        {
          id: "3",
          price: "0.95",
          title: "best thing I ever did",
          content: "crazier days have happened",
        },
      ],
    };
  }
  render() {
    return (
      <div className="shopview">
        <div className="shopview__catagories">catagories</div>
        <div className="shopview__catagorydetails">catagory details</div>
        <Carousel projects={this.state.projects} />
      </div>
    );
  }
}
