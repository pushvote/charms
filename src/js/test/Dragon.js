//This is needed for all react files?
import React from "react";
import Dragula from 'react-dragula';

//this allows us to import Layout
export default class Footer extends React.Component {
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

    render() {
        return (
          <div className='container' ref={this.dragulaDecorator}>
            <div>Swap me around</div>
            <div>Swap her around</div>
            <div>Swap him around</div>
            <div>Swap them around</div>
            <div>Swap us around</div>
            <div>Swap things around</div>
            <div>Swap everything around</div>
          </div>
        );
    }
}




















/*
//this allows us to import Layout
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Jared"};
    }

    render() {

      const containerStyle = {
          margin: "20px",
          background: "#73AD21"
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
}*/
