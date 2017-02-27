//This is needed for all react files?
import React from "react";

//this allows us to import Layout
export default class Title extends React.Component {
    render() {
        return (
          <div>Welcome {this.props.title}!</div>
        );
    }
}
