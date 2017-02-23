//This is needed for all react files?
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

//this allows us to import Layout
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcomezzz"
        }

    }
    changeTitle(title){
      this.setState({title});
    }
    render() {
        return (
            <div>
              <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}  />
              <Footer />
            </div>
        );
    }
}
