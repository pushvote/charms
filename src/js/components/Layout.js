//This is needed for all react files?
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

//this allows us to import Layout
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Jared"};
    }

    render() {

      const containerStyle = {
          margin: "60px", /*
          background: "#73AD21"*/
      };

      setTimeout(() => {
        this.setState({name: "Brad"})
      }, 1000)
        return (
            <div style={containerStyle}>
              <Header title={this.state.name}/>
              {this.props.children}
                <Footer/>
            </div>
        );
    }
}
