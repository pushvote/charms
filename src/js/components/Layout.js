//This is needed for all react files?
import React from "react";
import Header from "./header/Header";
import Search from "./search/Search";
import Lists from "./lists/Lists";
import Footer from "./Footer";
import Dragula from 'react-dragula';


//this allows us to import Layout
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Jared"};
    }

    render() {

      const containerStyle = {
          margin: "20px",
          /*background: "#73AD21"*/
      };
        return (
<div>
  <Header title={this.state.name}/>
  <div style={containerStyle}>
    <Search title={this.state.name}/>
    <Lists title={this.state.name}/>
  </div>
</div>
        );
    }
}
