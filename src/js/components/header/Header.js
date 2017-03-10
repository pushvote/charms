//This is needed for all react files?
import React from "react";
import Nav from "./nav/Nav"
//this allows us to import Layout
export default class Header extends React.Component {
    render() {
        return (
          <div>
            <Nav />
          </div>
        );
    }
}
