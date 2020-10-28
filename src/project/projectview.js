import React, { Component } from "react";

export default class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.slug,
    };
  }
  render() {
    console.log(this.state.id);
    return <div>project view</div>;
  }
}

// import React from "react";

// function ProjectView() {
//   return <div>projectview</div>;
// }

// export default ProjectView;
